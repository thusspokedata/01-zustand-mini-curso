# React + TypeScript + Vite + Zustand + TailwindCSS + ReactRouterDom

Este es un cascarón de proyecto, siéntete libre de usarlo para tus proyectos.

<img src="https://github.com/Klerith/zustand-mini-curso/blob/main/public/screenshot.png?raw=true" alt="Dashboard Screenshot">

[zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
[zustand-Using middlewares](https://docs.pmnd.rs/zustand/guides/typescript#using-middlewares)
[Firebase](https://firebase.google.com)



## Instalar

1. Clonar proyecto
2. Instalar dependencias ```npm install```
3. Correr en desarrollo ```npm run dev```


| Característica        | Local Storage                            | Session Storage                            |
|-----------------------|------------------------------------------|--------------------------------------------|
| **Persistencia**      | Persiste entre sesiones del navegador    | Persiste solo durante la sesión actual     |
| **Capacidad**         | Generalmente hasta 5MB por origen        | Generalmente hasta 5MB por origen          |
| **Alcance**           | Disponible en todas las pestañas y ventanas del mismo origen | Disponible solo en la pestaña o ventana que lo creó |
| **Uso Común**         | Almacenar datos a largo plazo como preferencias del usuario y tokens de autenticación | Almacenar datos temporales como estados de formularios y datos de navegación |
| **Ejemplo de Código** | ```javascript                            | ```javascript                              |
|                       | // Guardar un dato                       | // Guardar un dato                         |
|                       | localStorage.setItem('nombre', 'Juan');  | sessionStorage.setItem('nombre', 'Juan');  |
|                       |                                          |                                            |
|                       | // Recuperar un dato                     | // Recuperar un dato                       |
|                       | const nombre = localStorage.getItem('nombre'); | const nombre = sessionStorage.getItem('nombre'); |
|                       |                                          |                                            |
|                       | // Eliminar un dato                      | // Eliminar un dato                        |
|                       | localStorage.removeItem('nombre');       | sessionStorage.removeItem('nombre');       |
|                       |                                          |                                            |
|                       | // Limpiar todo                          | // Limpiar todo                            |
|                       | localStorage.clear();                    | sessionStorage.clear();                    |
|                       | ```                                      | ```                                        |

## Recursos Adicionales

- [MDN Web Docs - Local Storage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
- [MDN Web Docs - Session Storage](https://developer.mozilla.org/es/docs/Web/API/Window/sessionStorage)



| Característica        | Local Storage                            | Session Storage                            |
|-----------------------|------------------------------------------|--------------------------------------------|
| **Persistencia**      | Persiste entre sesiones del navegador    | Persiste solo durante la sesión actual     |
| **Capacidad**         | Generalmente hasta 5MB por origen        | Generalmente hasta 5MB por origen          |
| **Alcance**           | Disponible en todas las pestañas y ventanas del mismo origen | Disponible solo en la pestaña o ventana que lo creó |
| **Uso Común**         | Almacenar datos a largo plazo como preferencias del usuario y tokens de autenticación | Almacenar datos temporales como estados de formularios y datos de navegación |
| **Ejemplo de Código** | ```javascript                            | ```javascript                              |
|                       | // Guardar un dato                       | // Guardar un dato                         |
|                       | localStorage.setItem('nombre', 'Juan');  | sessionStorage.setItem('nombre', 'Juan');  |
|                       |                                          |                                            |
|                       | // Recuperar un dato                     | // Recuperar un dato                       |
|                       | const nombre = localStorage.getItem('nombre'); | const nombre = sessionStorage.getItem('nombre'); |
|                       |                                          |                                            |
|                       | // Eliminar un dato                      | // Eliminar un dato                        |
|                       | localStorage.removeItem('nombre');       | sessionStorage.removeItem('nombre');       |
|                       |                                          |                                            |
|                       | // Limpiar todo                          | // Limpiar todo                            |
|                       | localStorage.clear();                    | sessionStorage.clear();                    |
|                       | ```                                      | ```                                        |

## Recursos Adicionales

- [MDN Web Docs - Local Storage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
- [MDN Web Docs - Session Storage](https://developer.mozilla.org/es/docs/Web/API/Window/sessionStorage)


https://docs.pmnd.rs/zustand/getting-started/introduction
