# Postman · `get_all_groups`

Tool to get all user groups in a Postman team. Use when you need to list all groups and their details including member counts and timestamps. Returns an array of group objects with their IDs, names, team IDs, user counts, and creation/update timestamps.

- **Service**: `postman`
- **Action**: `get_all_groups`
- **Action id**: `postman.get_all_groups`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_all_groups"
```

## Run

```bash
oo connector run "postman" --action "get_all_groups" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
