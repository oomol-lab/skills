# Postman · `get_all_monitors`

Tool to get all monitors accessible to the authenticated user with optional workspace filtering. Use when you need to list or retrieve monitors from Postman. Returns an array of monitor objects with their IDs, names, and UIDs.

- **Service**: `postman`
- **Action**: `get_all_monitors`
- **Action id**: `postman.get_all_monitors`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_all_monitors"
```

## Run

```bash
oo connector run "postman" --action "get_all_monitors" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
