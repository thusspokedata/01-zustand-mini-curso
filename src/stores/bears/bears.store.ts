import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Bear {
  id: number;
  name: string;
}

interface BearStore {
  blackBears: number;
  pandaBears: number;
  polarBears: number;

  bears: Bear[];

  totalBears: () => number;

  increasePopulationBlackBears: (by: number) => void;
  increasePopulationPandaBears: (by: number) => void;
  increasePopulationPolarBears: (by: number) => void;

  doNothing: () => void;
  addBear: () => void;
  clearBears: () => void;
}

export const useBearStore = create<BearStore>()(
  persist(
    (set, get) => ({
      blackBears: 10,
      pandaBears: 5,
      polarBears: 1,

      bears: [
        { id: 1, name: 'blackBear #1' },
        { id: 2, name: 'pandaBear' },
        { id: 3, name: 'polarBear' },
      ],

      totalBears: () => {
        return get().blackBears + get().pandaBears + get().polarBears;
      },

      increasePopulationBlackBears: (by: number) =>
        set((state) => ({ blackBears: state.blackBears + by })),
      increasePopulationPandaBears: (by: number) =>
        set((state) => ({ pandaBears: state.pandaBears + by })),
      increasePopulationPolarBears: (by: number) =>
        set((state) => ({ polarBears: state.polarBears + by })),
      doNothing: () => set((state) => ({ bears: [...state.bears] })),
      addBear: () =>
        set((state) => ({
          bears: [
            ...state.bears,
            {
              id: state.bears.length + 1,
              name: `oso #${state.bears.length + 1}`,
            },
          ],
        })),
      clearBears: () => set({ bears: [] }),
    }),
    { name: 'bear-storage' },
  ),
);
