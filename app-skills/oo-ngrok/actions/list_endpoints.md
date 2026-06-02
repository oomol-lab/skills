# ngrok · `list_endpoints`

List active ngrok endpoints for the current account, with optional pagination and CEL filtering.

- **Service**: `ngrok`
- **Action**: `list_endpoints`
- **Action id**: `ngrok.list_endpoints`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ngrok" --action "list_endpoints"
```

## Run

```bash
oo connector run "ngrok" --action "list_endpoints" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
