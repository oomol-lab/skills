# Dida365 · `get_user_project`

List the projects available to the connected Dida365 (滴答清单) account.

- **Service**: `dida365`
- **Action**: `get_user_project`
- **Action id**: `dida365.get_user_project`
- **Required scopes**: dida365.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dida365" --action "get_user_project"
```

## Run

```bash
oo connector run "dida365" --action "get_user_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
