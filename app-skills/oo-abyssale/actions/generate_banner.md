# Abyssale · `generate_banner`

Generate one Abyssale image from a design using JSON element overrides and return the generated file metadata.

- **Service**: `abyssale`
- **Action**: `generate_banner`
- **Action id**: `abyssale.generate_banner`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "abyssale" --action "generate_banner"
```

## Run

```bash
oo connector run "abyssale" --action "generate_banner" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
