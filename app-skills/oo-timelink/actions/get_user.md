# timelink · `get_user`

Fetch one Timelink user by its identifier.

- **Service**: `timelink`
- **Action**: `get_user`
- **Action id**: `timelink.get_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "timelink" --action "get_user"
```

## Run

```bash
oo connector run "timelink" --action "get_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
