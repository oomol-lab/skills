# Truvera · `list_dids`

List the DIDs controlled by the authenticated Truvera account.

- **Service**: `truvera`
- **Action**: `list_dids`
- **Action id**: `truvera.list_dids`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "truvera" --action "list_dids"
```

## Run

```bash
oo connector run "truvera" --action "list_dids" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
