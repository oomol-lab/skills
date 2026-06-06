# Abyssale · `get_banner`

Retrieve metadata for an Abyssale generated file.

- **Service**: `abyssale`
- **Action**: `get_banner`
- **Action id**: `abyssale.get_banner`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "abyssale" --action "get_banner"
```

## Run

```bash
oo connector run "abyssale" --action "get_banner" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
