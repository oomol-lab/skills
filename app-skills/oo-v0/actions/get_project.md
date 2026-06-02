# v0 · `get_project`

Get a single v0 project by project ID.

- **Service**: `v0`
- **Action**: `get_project`
- **Action id**: `v0.get_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "get_project"
```

## Run

```bash
oo connector run "v0" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
