# Redux Template (Ionic/Angular)

Esta carpeta es una plantilla para que, como profesor, puedas explicar el patrón Redux paso a paso y luego implementar con Signals.

## 1. Objetivo

- Entender el flujo unidireccional del estado: actions → reducers → store → UI.
- Ver cómo ngrx aplica este patrón en Angular.
- Mostrar cómo migrar a Signals en una fase 2 (un store propio con `signal` / `effect`).

## 2. Estructura sugerida

```
redux/
  src/
    app/
      store/
        actions.ts
        reducer.ts
        selectors.ts
        state.ts
        index.ts
      features/
        counter/
          counter.component.ts
          counter.component.html
      app.module.ts
      app.component.ts
  nx-step-by-step.md
```

## 3. Instrucciones para arrancar

1. Clona o copia `ionic-chat-template/redux` a un nuevo proyecto Angular/Ionic.
2. `npm install`.
3. `npm run start`.
4. Navega a la página que muestra el componente con la lógica de Redux.

## 4. Qué es el patrón Redux

- `State` es el modelo inmutable de la aplicación.
- `Action` describe un evento que quiere cambiar el estado.
- `Reducer` es una función pura que toma (estado, acción) y devuelve un nuevo estado.
- `Store` es el lugar central donde se guarda el estado y se despachan las acciones.
- `Selector` obtiene trozos de estado de forma memorizada.

### Ventajas

- Consistencia y trazabilidad de cambios.
- Fácil de probar y depurar (Time Travel Debugging).
- Escalable para apps grandes.

### Desventajas

- Verbosidad (especialmente con ngrx antes de `createReducer`).
- Curva de aprendizaje.

## 5. Cómo lo implementa ngrx (concepto)

- `createAction` define actions.
- `createReducer` y `on` definen cómo cada action transforma el state.
- `createFeatureSelector`, `createSelector` para consumir el estado.
- `Store` se inyecta en componentes con `store.dispatch` y `store.select`.

## 6. Diagrama Mermaid del flujo Redux

```mermaid
flowchart LR
  A[Componente UI] -->|dispatch(action)| B(Store)
  B -->|state| C(Reducer)
  C -->|new state| B
  B -->|select| D(Selectors)
  D --> A
```

## 7. Plantilla mínima de ejercicio

- No hay lógica aplicada aun, es un starting point para tu clase.
- Genera `actions.ts`, `reducer.ts`, `state.ts`, `selectors.ts` y conéctalo en `app.module.ts`.
- Explica mientras escribes:
  1. State inmutable
  2. Action payload
  3. Reducer puro
  4. Store dispatch + select

## 8. Ejemplo PokeAPI (preimplementado)

En esta carpeta ya hay un ejemplo con:

- carpeta `src/app/features/poke` con `PokeApiService` + `PokeComponent`
- `store` con `state/actions/reducer/selectors`
- `app.module.ts` con `StoreModule.forRoot(reducers)`
- `app.component.ts` que monta `<app-poke>`

Puedes usarlo directamente en la clase como ejercicio: 
- explicar `loadPokemons`, `loadPokemonsSuccess` y `loadPokemonsFailure`
- añadir `Effects` más tarde para separar la lógica async
- migrar al segundo día con Signals (`signal`, `computed`, `effect`)

---

## 9. Cómo levantar

1. `npm install`
2. `npm start`

> Con este repositorio independiente, puedes desarrollar con ngrx en la misma carpeta y dejar `ionic-chat-template` intacto.

Una vez entendido Redux básico, crear un store con `signal`, `computed`, `effect` y `readonly`:

- Mantener estado como `signal<State>(initialState)`.
- Acciones como funciones que mutan con `set`.
- Selectores como `computed(() => ... )`.
- Efectos con `effect(...)` para operaciones async.

---

Documento de referencia para tu clase, válido para mostrar al alumno y/o generar un ejercicio práctico.
