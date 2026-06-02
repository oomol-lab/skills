# Worksnaps · `get_project`

Read one Worksnaps project by project ID.

- **Service**: `worksnaps`
- **Action**: `get_project`
- **Action id**: `worksnaps.get_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "worksnaps" --action "get_project"
```

## Run

```bash
oo connector run "worksnaps" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
