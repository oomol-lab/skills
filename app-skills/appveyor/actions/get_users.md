# AppVeyor · `get_users`

List AppVeyor team users accessible to the connected API token.

- **Service**: `appveyor`
- **Action**: `get_users`
- **Action id**: `appveyor.get_users`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "appveyor" --action "get_users"
```

## Run

```bash
oo connector run "appveyor" --action "get_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
