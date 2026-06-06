# Motion · `get_my_user`

Get the Motion user associated with the current API key.

- **Service**: `motion`
- **Action**: `get_my_user`
- **Action id**: `motion.get_my_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "motion" --action "get_my_user"
```

## Run

```bash
oo connector run "motion" --action "get_my_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
