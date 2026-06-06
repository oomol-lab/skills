# Abyssale · `get_design_format`

Retrieve detailed information for one Abyssale design format.

- **Service**: `abyssale`
- **Action**: `get_design_format`
- **Action id**: `abyssale.get_design_format`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "abyssale" --action "get_design_format"
```

## Run

```bash
oo connector run "abyssale" --action "get_design_format" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
