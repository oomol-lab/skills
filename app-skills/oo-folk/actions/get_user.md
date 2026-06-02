# folk · `get_user`

Get one Folk workspace user by user ID.

- **Service**: `folk`
- **Action**: `get_user`
- **Action id**: `folk.get_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "folk" --action "get_user"
```

## Run

```bash
oo connector run "folk" --action "get_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
