# EspoCRM · `update_record`

Update selected fields on one EspoCRM record.

- **Service**: `espocrm`
- **Action**: `update_record`
- **Action id**: `espocrm.update_record`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "espocrm" --action "update_record"
```

## Run

```bash
oo connector run "espocrm" --action "update_record" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes EspoCRM state. Confirm the exact payload and intended effect with the user before running.
