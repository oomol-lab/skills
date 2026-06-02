# Knack · `get_record`

Retrieve one Knack record by object key and record ID.

- **Service**: `knack`
- **Action**: `get_record`
- **Action id**: `knack.get_record`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "knack" --action "get_record"
```

## Run

```bash
oo connector run "knack" --action "get_record" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
