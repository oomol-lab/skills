# Owl Protocol · `get_project_info`

Read the connected Owl Protocol project's summary information.

- **Service**: `owl_protocol`
- **Action**: `get_project_info`
- **Action id**: `owl_protocol.get_project_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "owl_protocol" --action "get_project_info"
```

## Run

```bash
oo connector run "owl_protocol" --action "get_project_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
