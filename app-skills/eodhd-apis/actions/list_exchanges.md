# EODHD APIs · `list_exchanges`

List exchanges supported by EODHD.

- **Service**: `eodhd_apis`
- **Action**: `list_exchanges`
- **Action id**: `eodhd_apis.list_exchanges`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "eodhd_apis" --action "list_exchanges"
```

## Run

```bash
oo connector run "eodhd_apis" --action "list_exchanges" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
