# SignPath · `get_signing_request`

Get the current status and metadata for a SignPath signing request so callers can poll for completion.

- **Service**: `signpath`
- **Action**: `get_signing_request`
- **Action id**: `signpath.get_signing_request`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "signpath" --action "get_signing_request"
```

## Run

```bash
oo connector run "signpath" --action "get_signing_request" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
