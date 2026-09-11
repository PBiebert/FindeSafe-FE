# API-Endpoint-Dokumentation

> Neuen Endpoint dokumentieren: Abschnitt unten unter "Vorlage" kopieren, ans
> Ende der passenden Kategorie einfügen und in das Inhaltsverzeichnis
> eintragen. Eckige Klammern durch echte Werte ersetzen.

## Inhaltsverzeichnis

- Accounts
  - [Registierung](#registierung)

---

## Accounts

### Registierung

|                       |                      |
| --------------------- | -------------------- |
| **Methode**           | `POST`               |
| **URL**               | `/api/registration/` |
| **Auth erforderlich** | Nein                 |

**Beschreibung**: Registrierung eines neuen, zunächst inaktiven Users. Der
User erhält eine Aktivierungsmail und muss den enthaltenen Link öffnen,
bevor ein Login möglich ist.

**Request**

Headers:

| Header         | Wert               | Pflicht |
| -------------- | ------------------ | ------- |
| `Content-Type` | `application/json` | Ja      |

Body:

| Feld              | Typ      | Pflicht | Beschreibung                       |
| ----------------- | -------- | ------- | ---------------------------------- |
| `firstname`       | `string` | Ja      | Vorname des Nutzers                |
| `lastname`        | `string` | Ja      | Nachname des Nutzers               |
| `email`           | `string` | Ja      | E-Mail-Adresse des Nutzers         |
| `password`        | `string` | Ja      | Min. 8 Zeichen                     |
| `repeat_password` | `string` | Ja      | Muss mit `password` übereinstimmen |

```json
{
  "firstname": "Max",
  "lastname": "Mustermann",
  "email": "max@example.com",
  "password": "geheim123",
  "repeat_password": "geheim123"
}
```

**Response**

Erfolgreich – `201 Created`:

```json
{
  "message": "Bitte bestätige deine E-Mail-Adresse"
}
```

Fehler:

| Status | Bedeutung                           |
| ------ | ----------------------------------- |
| `400`  | Validierungsfehler / falsche Felder |

**Frontend-Nutzung**: `API_BASE_URL` und Endpoint-Konstante siehe [src/config/api.ts](../../src/config/api.ts)

**Offene Punkte**: [z. B. "Rate-Limit: max. 5 Versuche pro Minute"]

---

## Users

_[noch keine Endpoints dokumentiert]_

---

## Alerts

_[noch keine Endpoints dokumentiert]_

---

## Vorlage (zum Kopieren für neue Endpoints)

### [Name des Endpoints]

|                       |                                           |
| --------------------- | ----------------------------------------- |
| **Methode**           | `[GET \| POST \| PUT \| PATCH \| DELETE]` |
| **URL**               | `[z. B. /api/...]`                        |
| **Auth erforderlich** | `[Ja/Nein]`                               |
| **Backend-View**      | `[Datei -> View-Name]`                    |

**Beschreibung**: [...]

**Request**

Headers:

| Header          | Wert               | Pflicht     |
| --------------- | ------------------ | ----------- |
| `Content-Type`  | `application/json` | Ja          |
| `Authorization` | `Bearer <token>`   | `[Ja/Nein]` |

Path-/Query-Parameter _(falls vorhanden)_:

| Parameter | Typ     | Pflicht | Beschreibung |
| --------- | ------- | ------- | ------------ |
| `[...]`   | `[...]` | `[...]` | `[...]`      |

Body _(falls vorhanden)_:

| Feld    | Typ     | Pflicht | Beschreibung |
| ------- | ------- | ------- | ------------ |
| `[...]` | `[...]` | `[...]` | `[...]`      |

```json
{}
```

**Response**

Erfolgreich – `[200 OK]`:

```json
{}
```

Fehler:

| Status  | Bedeutung |
| ------- | --------- |
| `[...]` | `[...]`   |

**Frontend-Nutzung**: `[Verweis auf die Endpoint-Konstante in src/config/api.ts]`

**Offene Punkte**: [...]
