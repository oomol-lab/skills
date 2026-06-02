# EspoCRM · `create_record`

Create one EspoCRM record for the specified entity type.

- **Service**: `espocrm`
- **Action**: `create_record`
- **Action id**: `espocrm.create_record`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "espocrm" --action "create_record"
```

## Run

```bash
oo connector run "espocrm" --action "create_record" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes EspoCRM state. Confirm the exact payload and intended effect with the user before running.
