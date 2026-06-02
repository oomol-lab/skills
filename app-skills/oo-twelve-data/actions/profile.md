# Twelve Data · `profile`

Fetch the company profile for an instrument, including sector and contact fields.

- **Service**: `twelve_data`
- **Action**: `profile`
- **Action id**: `twelve_data.profile`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twelve_data" --action "profile"
```

## Run

```bash
oo connector run "twelve_data" --action "profile" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
