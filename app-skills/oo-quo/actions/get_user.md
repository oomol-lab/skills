# Quo · `get_user`

Get details for a Quo user by ID.

- **Service**: `quo`
- **Action**: `get_user`
- **Action id**: `quo.get_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "quo" --action "get_user"
```

## Run

```bash
oo connector run "quo" --action "get_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
