# Headout · `list_cities`

List active Headout cities.

- **Service**: `headout`
- **Action**: `list_cities`
- **Action id**: `headout.list_cities`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "headout" --action "list_cities"
```

## Run

```bash
oo connector run "headout" --action "list_cities" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
