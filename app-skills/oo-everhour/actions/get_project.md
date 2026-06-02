# Everhour · `get_project`

Get one Everhour project by its project ID.

- **Service**: `everhour`
- **Action**: `get_project`
- **Action id**: `everhour.get_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "everhour" --action "get_project"
```

## Run

```bash
oo connector run "everhour" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
