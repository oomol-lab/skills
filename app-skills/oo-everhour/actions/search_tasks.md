# Everhour · `search_tasks`

Search Everhour tasks across accessible projects.

- **Service**: `everhour`
- **Action**: `search_tasks`
- **Action id**: `everhour.search_tasks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "everhour" --action "search_tasks"
```

## Run

```bash
oo connector run "everhour" --action "search_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
