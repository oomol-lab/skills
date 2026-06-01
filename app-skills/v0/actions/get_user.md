# v0 · `get_user`

Get the authenticated v0 user profile for the connected API key.

- **Service**: `v0`
- **Action**: `get_user`
- **Action id**: `v0.get_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "get_user"
```

## Run

```bash
oo connector run "v0" --action "get_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
