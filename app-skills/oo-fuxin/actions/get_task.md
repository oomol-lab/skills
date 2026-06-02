# Foxit Cloud API · `get_task`

Fetch one Foxit task status and return the normalized task progress details.

- **Service**: `fuxin`
- **Action**: `get_task`
- **Action id**: `fuxin.get_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fuxin" --action "get_task"
```

## Run

```bash
oo connector run "fuxin" --action "get_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
