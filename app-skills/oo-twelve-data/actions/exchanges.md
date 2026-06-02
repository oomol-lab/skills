# Twelve Data · `exchanges`

List equity exchanges and their timezone and access metadata.

- **Service**: `twelve_data`
- **Action**: `exchanges`
- **Action id**: `twelve_data.exchanges`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twelve_data" --action "exchanges"
```

## Run

```bash
oo connector run "twelve_data" --action "exchanges" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
