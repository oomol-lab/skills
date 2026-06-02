# timelink · `get_project`

Fetch one Timelink project by its identifier.

- **Service**: `timelink`
- **Action**: `get_project`
- **Action id**: `timelink.get_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "timelink" --action "get_project"
```

## Run

```bash
oo connector run "timelink" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
