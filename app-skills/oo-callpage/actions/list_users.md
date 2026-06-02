# CallPage · `list_users`

List CallPage users with pagination.

- **Service**: `callpage`
- **Action**: `list_users`
- **Action id**: `callpage.list_users`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "callpage" --action "list_users"
```

## Run

```bash
oo connector run "callpage" --action "list_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
