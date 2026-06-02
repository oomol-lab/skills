# Postmark · `get_server`

Get the current Postmark server configuration for the connected server token.

- **Service**: `postmark`
- **Action**: `get_server`
- **Action id**: `postmark.get_server`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postmark" --action "get_server"
```

## Run

```bash
oo connector run "postmark" --action "get_server" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
