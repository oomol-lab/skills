# New Relic · `get_current_user`

Validate the connected New Relic user key and return the current user profile from NerdGraph.

- **Service**: `new_relic`
- **Action**: `get_current_user`
- **Action id**: `new_relic.get_current_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "new_relic" --action "get_current_user"
```

## Run

```bash
oo connector run "new_relic" --action "get_current_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
