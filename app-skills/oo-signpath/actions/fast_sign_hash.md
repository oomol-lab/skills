# SignPath · `fast_sign_hash`

Submit a fast SignPath hash-signing request using the REST API payload.json contract and return the signature result immediately.

- **Service**: `signpath`
- **Action**: `fast_sign_hash`
- **Action id**: `signpath.fast_sign_hash`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "signpath" --action "fast_sign_hash"
```

## Run

```bash
oo connector run "signpath" --action "fast_sign_hash" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
