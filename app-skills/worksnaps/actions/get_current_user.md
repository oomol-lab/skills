# Worksnaps · `get_current_user`

Read the current Worksnaps user profile for the connected API token.

- **Service**: `worksnaps`
- **Action**: `get_current_user`
- **Action id**: `worksnaps.get_current_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "worksnaps" --action "get_current_user"
```

## Run

```bash
oo connector run "worksnaps" --action "get_current_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
