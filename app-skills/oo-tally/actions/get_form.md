# Tally · `get_form`

Fetch a single Tally form by ID with its blocks and settings.

- **Service**: `tally`
- **Action**: `get_form`
- **Action id**: `tally.get_form`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tally" --action "get_form"
```

## Run

```bash
oo connector run "tally" --action "get_form" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
