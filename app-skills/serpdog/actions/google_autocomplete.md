# Serpdog · `google_autocomplete`

Retrieve Google Autocomplete suggestions through Serpdog.

- **Service**: `serpdog`
- **Action**: `google_autocomplete`
- **Action id**: `serpdog.google_autocomplete`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "serpdog" --action "google_autocomplete"
```

## Run

```bash
oo connector run "serpdog" --action "google_autocomplete" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
