# v0 · `get_project_by_chat`

Get the v0 project currently linked to a chat.

- **Service**: `v0`
- **Action**: `get_project_by_chat`
- **Action id**: `v0.get_project_by_chat`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "get_project_by_chat"
```

## Run

```bash
oo connector run "v0" --action "get_project_by_chat" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
