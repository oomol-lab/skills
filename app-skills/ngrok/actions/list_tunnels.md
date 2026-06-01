# ngrok · `list_tunnels`

List online ngrok tunnels for the current account with pagination support.

- **Service**: `ngrok`
- **Action**: `list_tunnels`
- **Action id**: `ngrok.list_tunnels`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ngrok" --action "list_tunnels"
```

## Run

```bash
oo connector run "ngrok" --action "list_tunnels" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
