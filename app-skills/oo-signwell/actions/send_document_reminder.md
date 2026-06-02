# SignWell · `send_document_reminder`

Send a SignWell reminder email to all unsigned recipients or to a targeted subset on a document.

- **Service**: `signwell`
- **Action**: `send_document_reminder`
- **Action id**: `signwell.send_document_reminder`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "signwell" --action "send_document_reminder"
```

## Run

```bash
oo connector run "signwell" --action "send_document_reminder" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes SignWell state. Confirm the exact payload and intended effect with the user before running.
