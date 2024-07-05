import { StateStorage, createJSONStorage } from 'zustand/middleware';

const storageApi: StateStorage = {
  // como esto tb puede regresar promesas,significaria que podemos hacer una peticion a una API para leer y almacenar datos 
  // para q todo el store quede grabado en el servidor
  getItem: function (name: string): string | Promise<string | null> | null {
    // el  sessionStorage es provisto por el navegador y es un objeto global que permite almacenar datos en el navegador
    const data = sessionStorage.getItem(name);
    return data;
  },
  setItem: function (name: string, value: string): void | Promise<void> {
    sessionStorage.setItem(name, value);
  },
  removeItem: function (name: string): void | Promise<void> {
    console.log('removeItem', name);
  },
};

export const customSessionStorage = createJSONStorage(() => storageApi);
