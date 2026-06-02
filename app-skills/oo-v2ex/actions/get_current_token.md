# V2EX · `get_current_token`

Fetch metadata for the V2EX Personal Access Token used by this connection.

- **Service**: `v2ex`
- **Action**: `get_current_token`
- **Action id**: `v2ex.get_current_token`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v2ex" --action "get_current_token"
```

## Run

```bash
oo connector run "v2ex" --action "get_current_token" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
