# Abyssale · `get_design`

Retrieve Abyssale design details including formats, elements, and variables.

- **Service**: `abyssale`
- **Action**: `get_design`
- **Action id**: `abyssale.get_design`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "abyssale" --action "get_design"
```

## Run

```bash
oo connector run "abyssale" --action "get_design" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
