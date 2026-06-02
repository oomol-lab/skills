# ngrok · `list_tunnel_sessions`

List online ngrok tunnel sessions for the current account with pagination and CEL filtering.

- **Service**: `ngrok`
- **Action**: `list_tunnel_sessions`
- **Action id**: `ngrok.list_tunnel_sessions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ngrok" --action "list_tunnel_sessions"
```

## Run

```bash
oo connector run "ngrok" --action "list_tunnel_sessions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
