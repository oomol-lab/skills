# NASA · `get_epic_cloud`

Retrieve the most recent EPIC cloud fraction imagery metadata.

- **Service**: `nasa`
- **Action**: `get_epic_cloud`
- **Action id**: `nasa.get_epic_cloud`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nasa" --action "get_epic_cloud"
```

## Run

```bash
oo connector run "nasa" --action "get_epic_cloud" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
