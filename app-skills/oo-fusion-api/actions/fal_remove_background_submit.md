# OOMOL Fusion API · `fal_remove_background_submit`

Remove image backgrounds with the Fal.ai BRIA model

- **Service**: `fusion-api`
- **Action**: `fal_remove_background_submit`
- **Action id**: `fusion-api.fal_remove_background_submit`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "fal_remove_background_submit"
```

## Run

```bash
oo connector run "fusion-api" --action "fal_remove_background_submit" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites OOMOL Fusion API data. Always confirm the target and get explicit user approval before running.
