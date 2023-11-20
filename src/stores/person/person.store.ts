import { type StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { firebaseStorage } from '../storages/firebase.storage';

interface PersonState {
  firstName: string;
  lastName: string;
}

interface Actions {
  setFirstName(value: string): void;
  setLastName(value: string): void;
}

const storeApi: StateCreator<
  PersonState & Actions,
  [['zustand/devtools', never]]
> = (set) => ({
  firstName: '',
  lastName: '',

  setFirstName: (value: string) =>
    set((state) => ({ firstName: value }), false, 'setFirstName'),
  setLastName: (value: string) =>
    set((state) => ({ lastName: value }), false, 'setLasttName'),
});

export const usePersonStore = create<PersonState & Actions>()(
  devtools(
    persist(storeApi, {
      name: 'person-storage',
      storage: firebaseStorage,
    }),
  ),
);
