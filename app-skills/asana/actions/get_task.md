# Asana · `get_task`

Get a single Asana task by gid.

- **Service**: `asana`
- **Action**: `get_task`
- **Action id**: `asana.get_task`
- **Required scopes**: tasks:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "asana" --action "get_task"
```

## Run

```bash
oo connector run "asana" --action "get_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
