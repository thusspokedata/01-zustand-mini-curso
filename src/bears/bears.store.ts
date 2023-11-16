import { create } from 'zustand';

interface Bear {
  id: string;
  name: string;
}

interface BearStore {
  blackBears: number;
  pandaBears: number;
  polarBears: number;

  bears: Bear[];

  increasePopulationBlackBears: (by: number) => void;
  increasePopulationPandaBears: (by: number) => void;
  increasePopulationPolarBears: (by: number) => void;

  doNothing: () => void;
}

export const useBearStore = create<BearStore>()((set) => ({
  blackBears: 10,
  pandaBears: 5,
  polarBears: 1,

  bears: [
    { id: '1', name: 'blackBear #1' },
    { id: '2', name: 'pandaBear' },
    { id: '3', name: 'polarBear' },
  ],

  increasePopulationBlackBears: (by: number) =>
    set((state) => ({ blackBears: state.blackBears + by })),
  increasePopulationPandaBears: (by: number) =>
    set((state) => ({ pandaBears: state.pandaBears + by })),
  increasePopulationPolarBears: (by: number) =>
    set((state) => ({ polarBears: state.polarBears + by })),
  doNothing: () => set((state) => ({ bears: [...state.bears] })),
}));
