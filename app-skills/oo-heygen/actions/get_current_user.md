# HeyGen · `get_current_user`

Retrieve profile information for the HeyGen account associated with the API key.

- **Service**: `heygen`
- **Action**: `get_current_user`
- **Action id**: `heygen.get_current_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "heygen" --action "get_current_user"
```

## Run

```bash
oo connector run "heygen" --action "get_current_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
