# Bark · `get_server_info`

Fetch raw server information from the connected Bark server.

- **Service**: `bark`
- **Action**: `get_server_info`
- **Action id**: `bark.get_server_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bark" --action "get_server_info"
```

## Run

```bash
oo connector run "bark" --action "get_server_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
