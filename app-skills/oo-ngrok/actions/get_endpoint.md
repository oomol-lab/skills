# ngrok · `get_endpoint`

Fetch one ngrok endpoint by ID and return the upstream endpoint object.

- **Service**: `ngrok`
- **Action**: `get_endpoint`
- **Action id**: `ngrok.get_endpoint`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ngrok" --action "get_endpoint"
```

## Run

```bash
oo connector run "ngrok" --action "get_endpoint" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
