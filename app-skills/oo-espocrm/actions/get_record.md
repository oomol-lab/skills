# EspoCRM · `get_record`

Get one EspoCRM record by entity type and record identifier.

- **Service**: `espocrm`
- **Action**: `get_record`
- **Action id**: `espocrm.get_record`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "espocrm" --action "get_record"
```

## Run

```bash
oo connector run "espocrm" --action "get_record" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
