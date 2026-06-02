# ngrok · `list_reserved_domains`

List reserved ngrok domains for the current account with pagination and CEL filtering.

- **Service**: `ngrok`
- **Action**: `list_reserved_domains`
- **Action id**: `ngrok.list_reserved_domains`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ngrok" --action "list_reserved_domains"
```

## Run

```bash
oo connector run "ngrok" --action "list_reserved_domains" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
