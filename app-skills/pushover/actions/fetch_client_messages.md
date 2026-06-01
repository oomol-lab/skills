# Pushover · `fetch_client_messages`

Download pending Open Client messages for a registered device.

- **Service**: `pushover`
- **Action**: `fetch_client_messages`
- **Action id**: `pushover.fetch_client_messages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushover" --action "fetch_client_messages"
```

## Run

```bash
oo connector run "pushover" --action "fetch_client_messages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
