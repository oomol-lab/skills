# Countdown API · `autocomplete`

Get eBay autocomplete suggestions for a search term through Countdown API.

- **Service**: `countdown_api`
- **Action**: `autocomplete`
- **Action id**: `countdown_api.autocomplete`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "countdown_api" --action "autocomplete"
```

## Run

```bash
oo connector run "countdown_api" --action "autocomplete" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
