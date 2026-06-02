# SignWell · `send_document`

Send a draft SignWell document for signing, with optional final subject, message, reminder, and redirect updates.

- **Service**: `signwell`
- **Action**: `send_document`
- **Action id**: `signwell.send_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "signwell" --action "send_document"
```

## Run

```bash
oo connector run "signwell" --action "send_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes SignWell state. Confirm the exact payload and intended effect with the user before running.
