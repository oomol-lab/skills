# Pushover · `listen_client_websocket`

Open a temporary Open Client WebSocket session, login with the provided device and secret, and collect realtime events until timeout or close.

- **Service**: `pushover`
- **Action**: `listen_client_websocket`
- **Action id**: `pushover.listen_client_websocket`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushover" --action "listen_client_websocket"
```

## Run

```bash
oo connector run "pushover" --action "listen_client_websocket" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
