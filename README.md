# FindeSafe-Frontend

React-Native-App (iOS/Android) für Standortabfragen: Der eigene Standort kann mit
festgelegten Personen geteilt und gleichzeitig ein Alert ausgelöst werden.
Zielgruppe: Privatnutzer in Deutschland aller Altersgruppen.
Das Backend (Django + DRF) liegt in einem separaten Repo (`BE-FindeSafe`).

Aktueller Fokus: Grundstruktur der App (Registrierung, E-Mail-Verifizierung, Rechtstexte).

## Tech-Stack

- [Expo](https://expo.dev) (React Native, Development Build via `expo run:*`)
- TypeScript
- [react-navigation](https://reactnavigation.org) (Native Stack)
- [react-hook-form](https://react-hook-form.com)
- `@react-native-vector-icons/material-icons`
- `expo-font` (Roboto), `expo-status-bar`, `expo-navigation-bar`

## Voraussetzungen

- Node.js >= v24.18.1
- npm
- Android Studio (für Android-Emulator/SDK) bzw. Xcode (für iOS-Simulator, nur macOS)
- Laufendes Backend (`BE-FindeSafe`), für Tests auf dem Gerät im LAN erreichbar

## Installation

```bash
npm install
```

## API-Konfiguration

Die API-Basis-URL und alle Endpoint-Pfade werden zentral in `src/config/api.ts` verwaltet
(aktuell keine `.env`):

- Entwicklung (`__DEV__`): `http://192.168.178.23:8000` – LAN-IP des Rechners, auf dem das Backend läuft
  (Backend mit `python manage.py runserver 0.0.0.0:8000` starten und die IP ggf. anpassen)
- Produktion: `https://api.findesafe.de`

### Genutzte Backend-Endpoints

| Methode | Pfad                             | Verwendung (`src/services/accountsService.ts`)                                              |
| ------- | -------------------------------- | ------------------------------------------------------------------------------------------- |
| `POST`  | `/api/register/`                 | Registrierung (`RegisterScreen`)                                                            |
| `POST`  | `/api/account-verification/`     | Konto per 6-stelligem Code aktivieren (`VerifyEmailScreen`)                                 |
| `POST`  | `/api/resend-verification-code/` | Verifizierungscode erneut anfordern (`VerifyEmailScreen`, Backend noch nicht implementiert) |

## Entwicklung

```bash
# App auf Android (Emulator/Gerät) bauen und starten
npm run android

# App auf iOS-Simulator bauen und starten (nur macOS)
npm run ios

# Nur den Metro/Expo Dev-Server starten
npm run start

# Web
npm run web
```

## Scripts

| Befehl            | Beschreibung                                              |
| ----------------- | --------------------------------------------------------- |
| `npm run start`   | Startet den Expo Dev-Server (`expo start`)                |
| `npm run android` | Baut und startet die App auf Android (`expo run:android`) |
| `npm run ios`     | Baut und startet die App auf iOS (`expo run:ios`)         |
| `npm run web`     | Startet die App im Browser (`expo start --web`)           |

## Projektstruktur

```
.
├── App.tsx                 # NavigationContainer + Root-Stack (Initial-Route: Login)
├── index.ts                # Einstiegspunkt
├── app.json                # Expo-Konfiguration (Icons, Fonts, Plugins)
├── android/                # Natives Android-Projekt (Development Build)
├── assets/                 # Icons, Bilder, Fonts
├── src/
│   ├── components/         # Wiederverwendbare UI-Komponenten (Buttons, Formularfelder, Logo)
│   ├── config/api.ts       # API-Basis-URL und Endpoint-Pfade
│   ├── screens/            # Login, Register, VerifyEmail, AGB, Impressum, Datenschutz, Widerruf
│   ├── services/           # API-Aufrufe (accountsService.ts)
│   └── themes/             # colors.ts (alle Farben), layout.ts, spacing.ts, text.ts
├── TODO.txt                # Offene rechtliche TODOs vor Store-Launch
└── package.json
```

## Coding-Konventionen

- Alle Farben werden ausschließlich in `src/themes/colors.ts` verwaltet.
