# Motion · `list_users`

List Motion users visible to the API key.

- **Service**: `motion`
- **Action**: `list_users`
- **Action id**: `motion.list_users`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "motion" --action "list_users"
```

## Run

```bash
oo connector run "motion" --action "list_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
