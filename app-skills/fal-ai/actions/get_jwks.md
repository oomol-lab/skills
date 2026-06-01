# fal.ai · `get_jwks`

Retrieve the fal JSON Web Key Set used for webhook signature verification.

- **Service**: `fal_ai`
- **Action**: `get_jwks`
- **Action id**: `fal_ai.get_jwks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fal_ai" --action "get_jwks"
```

## Run

```bash
oo connector run "fal_ai" --action "get_jwks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
