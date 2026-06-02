# API Ninjas · `timezone`

Fetch timezone metadata by timezone name or premium location lookup fields.

- **Service**: `api_ninjas`
- **Action**: `timezone`
- **Action id**: `api_ninjas.timezone`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "api_ninjas" --action "timezone"
```

## Run

```bash
oo connector run "api_ninjas" --action "timezone" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
