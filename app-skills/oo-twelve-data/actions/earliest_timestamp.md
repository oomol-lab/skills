# Twelve Data · `earliest_timestamp`

Fetch the earliest available historical timestamp for an instrument at a given interval.

- **Service**: `twelve_data`
- **Action**: `earliest_timestamp`
- **Action id**: `twelve_data.earliest_timestamp`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twelve_data" --action "earliest_timestamp"
```

## Run

```bash
oo connector run "twelve_data" --action "earliest_timestamp" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
