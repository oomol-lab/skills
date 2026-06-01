# Postman · `get_a_monitor`

Tool to retrieve information about a specific monitor in Postman. Use when you need to fetch monitor details including schedule, collection, environment, and run status.

- **Service**: `postman`
- **Action**: `get_a_monitor`
- **Action id**: `postman.get_a_monitor`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_a_monitor"
```

## Run

```bash
oo connector run "postman" --action "get_a_monitor" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
