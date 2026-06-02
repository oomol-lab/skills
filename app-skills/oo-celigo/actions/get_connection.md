# Celigo · `get_connection`

Get one Celigo connection by connection ID.

- **Service**: `celigo`
- **Action**: `get_connection`
- **Action id**: `celigo.get_connection`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "celigo" --action "get_connection"
```

## Run

```bash
oo connector run "celigo" --action "get_connection" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
