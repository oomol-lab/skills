# AppVeyor · `get_role`

Retrieve one AppVeyor team role by ID.

- **Service**: `appveyor`
- **Action**: `get_role`
- **Action id**: `appveyor.get_role`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "appveyor" --action "get_role"
```

## Run

```bash
oo connector run "appveyor" --action "get_role" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
