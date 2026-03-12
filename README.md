# Formacion Angular

Repositorio de prácticas y plantillas para formación en Angular. Cada carpeta es un proyecto independiente con su propio `package.json`.

## Estructura

```
Formacion/
├── Pokeapi/                  # Ejercicio vanilla JS con la PokeAPI
├── ionic-chat-template/      # App de chat con Ionic + Angular
├── redux/                    # Plantilla NgRx Store clásico (Angular 16)
└── ngrx-signal-store/        # Plantilla NgRx Signal Store (Angular 19)
```

---

## Proyectos

### `Pokeapi/`
Ejercicio básico con HTML, CSS y JavaScript vanilla que consume la [PokeAPI](https://pokeapi.co/). Sin frameworks, útil como punto de partida antes de introducir Angular.

### `ionic-chat-template/`
Aplicación de chat construida con **Ionic + Angular**. Sirve como plantilla para mostrar la integración de Ionic con Angular y el desarrollo de apps móviles híbridas.

### `redux/`
Plantilla de formación para enseñar el **patrón Redux con NgRx** en Angular 16.

- Arquitectura modular con `AppModule`
- Estado gestionado con `@ngrx/store`: actions, reducers, selectors
- Ejemplo funcional con la PokeAPI
- Pensado para explicar el flujo `dispatch → reducer → store → selector → UI` paso a paso

**Stack:** Angular 16 · @ngrx/store 16 · TypeScript

```bash
cd redux && npm install && npm start
```

### `ngrx-signal-store/`
Evolución del proyecto anterior usando **NgRx Signal Store** con Angular 19. Misma funcionalidad (PokeAPI), arquitectura moderna.

- Standalone components — sin `NgModule`
- Estado gestionado con `@ngrx/signals`: `signalStore`, `withState`, `withMethods`, `patchState`
- Inyección con `inject()` en lugar de constructor
- Nueva sintaxis de control flow: `@if`, `@for`
- Sin Observables en el template — acceso directo a signals con `store.loading()`

**Stack:** Angular 19 · @ngrx/signals 19 · TypeScript

```bash
cd ngrx-signal-store && npm install && npm start
```

---

## Comparativa redux vs signal store

| | `redux/` | `ngrx-signal-store/` |
|---|---|---|
| Angular | 16 | 19 |
| Librería | `@ngrx/store` | `@ngrx/signals` |
| Módulos | `AppModule` | Standalone + `appConfig` |
| Estado | Actions / Reducers / Selectors | `signalStore` + `patchState` |
| Reactividad | Observables + `async` pipe | Signals — `store.signal()` |
| Control flow | `*ngIf`, `*ngFor` | `@if`, `@for` |
| Boilerplate | Alto | Bajo |
