# CLAUDE.md

## Projektüberblick

- React Native App (iOS/Android) für Standortabfragen machen und mit festgelegte personen teilen und gleichzeitiig Alert auslösen.
- Zielgruppe:Privatnutzer aktuell in Deutschland aller altersgruppen.
- Backend: Django + DRF in separates Repo.
- Aktueller Fokus: Grundstruktur der App aufstellen

## Tech-Stack

- Frontend: React Native, TypeScript, react-hook-form, react-navigation, react-native-vector-icons/material-icons

## Konventionen

- Jeder Codeblock erhält Docstrings auf Deutsch
- Kommentiere den code detailiert auf deutsch um das verständniss zu erleichtern.
- Inhaltliche Änderungen pro Antwort auf ~200–300 Zeilen und max. 2 Dateien begrenzen, bei größerem Scope in Teilschritte/Task-Prompts aufteilen, sonst wird das Gegenlesen unzuverlässig. Ausnahme: rein
  mechanische Änderungen (Umbenennungen, Formatierung).
- Du Antwortest mir immer auf deutsch

## Dokumentation

- `README.md` muss immer aktuell gehalten werden. Alle wesentlichen
  notwendigen Befehle müssen fortgeschrieben werden das betrifft
  Dinge wie Setup-Befehle, npm-Skripte, genutzte Backend-Endpoints usw.

## Verbote / No-Gos

- Keine neuen Packages ohne Rückfrage installieren
- Keine Refactorings an Code, der nicht Teil der Aufgabe ist
- Keine Automatischen Commits
- Nie selbst `git commit` ausführen

## Wiederkehrende Befehle

- Dev-Server: `npm run android`

## Architektur-Hinweise

- Alle Farben werden in der `src/themes/colors.ts` verwaltet.
