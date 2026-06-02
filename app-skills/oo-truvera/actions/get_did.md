# Truvera · `get_did`

Get one DID document from Truvera by DID value.

- **Service**: `truvera`
- **Action**: `get_did`
- **Action id**: `truvera.get_did`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "truvera" --action "get_did"
```

## Run

```bash
oo connector run "truvera" --action "get_did" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
