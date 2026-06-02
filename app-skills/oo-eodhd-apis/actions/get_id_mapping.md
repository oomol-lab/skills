# EODHD APIs · `get_id_mapping`

Map between EODHD ticker symbols and security identifiers.

- **Service**: `eodhd_apis`
- **Action**: `get_id_mapping`
- **Action id**: `eodhd_apis.get_id_mapping`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "eodhd_apis" --action "get_id_mapping"
```

## Run

```bash
oo connector run "eodhd_apis" --action "get_id_mapping" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
