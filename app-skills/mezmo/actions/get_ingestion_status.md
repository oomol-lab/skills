# Mezmo · `get_ingestion_status`

Get whether the Mezmo ingestion service is currently ingesting data for the authenticated account.

- **Service**: `mezmo`
- **Action**: `get_ingestion_status`
- **Action id**: `mezmo.get_ingestion_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mezmo" --action "get_ingestion_status"
```

## Run

```bash
oo connector run "mezmo" --action "get_ingestion_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
