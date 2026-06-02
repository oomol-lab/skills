# AppVeyor · `get_roles`

List AppVeyor team roles accessible to the connected API token.

- **Service**: `appveyor`
- **Action**: `get_roles`
- **Action id**: `appveyor.get_roles`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "appveyor" --action "get_roles"
```

## Run

```bash
oo connector run "appveyor" --action "get_roles" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
