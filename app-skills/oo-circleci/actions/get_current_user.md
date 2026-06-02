# CircleCI · `get_current_user`

Get the currently authenticated CircleCI user profile.

- **Service**: `circleci`
- **Action**: `get_current_user`
- **Action id**: `circleci.get_current_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "circleci" --action "get_current_user"
```

## Run

```bash
oo connector run "circleci" --action "get_current_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
