# Twelve Data · `quote`

Fetch a real-time quote snapshot with price, change, volume, and 52-week range fields.

- **Service**: `twelve_data`
- **Action**: `quote`
- **Action id**: `twelve_data.quote`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twelve_data" --action "quote"
```

## Run

```bash
oo connector run "twelve_data" --action "quote" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
