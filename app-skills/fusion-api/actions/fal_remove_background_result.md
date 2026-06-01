# Oomol Fusion API · `fal_remove_background_result`

Image with background removed

- **Service**: `fusion-api`
- **Action**: `fal_remove_background_result`
- **Action id**: `fusion-api.fal_remove_background_result`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "fal_remove_background_result"
```

## Run

```bash
oo connector run "fusion-api" --action "fal_remove_background_result" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Oomol Fusion API data. Always confirm the target and get explicit user approval before running.
