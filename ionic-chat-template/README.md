# Ionic Chat Template

Plantilla base para ejercicios de chat con Ionic + Angular + Firebase.

## Objetivo

Tener un proyecto ya preparado con dependencias y archivos base, para que un becario copie la carpeta y arranque rápido.

## Estructura principal

- `src/environments/environment.ts` (config Firebase placeholder)
- `app.config.ts` (providers AngularFire)
- `src/app/services/auth.service.ts`
- `src/app/services/messages.service.ts`
- `src/app/models/message.model.ts`
- `src/app/guards/auth.guard.ts`
- `src/app/pages/home/home.page.ts` y HTML
- `src/app/pages/chat/chat.page.ts` y HTML
- `capacitor.config.ts`

## Comandos iniciales

```bash
npm install
npx cap init ionic-chat-template com.ionic.chat
ionic serve
```

## Configuración Firebase

1. Crear proyecto en https://console.firebase.google.com
2. Activar Authentication (Google) y Realtime Database
3. Copiar configuración en `src/environments/environment.ts`
4. Ejecutar la app con `ionic serve`
