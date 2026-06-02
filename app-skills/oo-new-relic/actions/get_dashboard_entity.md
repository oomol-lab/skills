# New Relic · `get_dashboard_entity`

Read a New Relic dashboard entity, including its pages and widgets, by GUID.

- **Service**: `new_relic`
- **Action**: `get_dashboard_entity`
- **Action id**: `new_relic.get_dashboard_entity`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "new_relic" --action "get_dashboard_entity"
```

## Run

```bash
oo connector run "new_relic" --action "get_dashboard_entity" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
