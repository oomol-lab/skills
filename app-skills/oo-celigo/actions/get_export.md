# Celigo · `get_export`

Get one Celigo export by export ID.

- **Service**: `celigo`
- **Action**: `get_export`
- **Action id**: `celigo.get_export`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "celigo" --action "get_export"
```

## Run

```bash
oo connector run "celigo" --action "get_export" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
