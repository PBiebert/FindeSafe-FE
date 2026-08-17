# FindeSafe-Frontend

<!-- TODO: Kurze Beschreibung, was die App macht und für wen. -->

## Tech-Stack

- [Expo](https://expo.dev) (React Native)
- TypeScript
- <!-- TODO: weitere Libraries ergänzen (z. B. Navigation, State-Management, UI-Kit) -->

## Voraussetzungen

- Node.js >= v24.18.1 `
- npm oder yarn
- [Expo CLI](https://docs.expo.dev/get-started/installation/) / Expo Go App auf dem Testgerät
- Android Studio (für Android-Emulator) bzw. Xcode (für iOS-Simulator, nur macOS)

## Installation

```bash
npm install
```

## Umgebungsvariablen

<!-- TODO: .env.example anlegen und hier auflisten, welche Variablen benötigt werden -->

```bash
cp .env.example .env
```

| Variable       | Beschreibung  | Beispiel                  |
| -------------- | ------------- | ------------------------- |
| `API_BASE_URL` | <!-- TODO --> | `https://api.example.com` |

## Entwicklung

```bash
# Dev-Server starten
npm run start

# Android
npm run android

# iOS
npm run ios

# Web
npm run web
```

## Projektstruktur

<!-- TODO: an tatsächliche Struktur anpassen -->

```
.
├── App.tsx
├── assets/
├── src/
│   ├── components/
│   ├── screens/
│   ├── navigation/
│   ├── hooks/
│   ├── services/
│   ├── styles/
│   └── types/
├── app.json
└── package.json
```

## Scripts

| Befehl            | Beschreibung                        |
| ----------------- | ----------------------------------- |
| `npm run start`   | Startet den Expo Dev-Server         |
| `npm run android` | Startet die App im Android-Emulator |
| `npm run ios`     | Startet die App im iOS-Simulator    |
| `npm run web`     | Startet die App im Browser          |

## Build / Deployment

<!-- TODO: EAS Build / Store-Deployment beschreiben -->

```bash
eas build --platform android
eas build --platform ios
```

## Tests

<!-- TODO: Test-Setup ergänzen (z. B. Jest, React Native Testing Library) -->

```bash
npm run test
```

## Coding-Konventionen

<!-- TODO: z. B. Linting/Formatting-Regeln, Commit-Konvention, Branching-Strategie -->
