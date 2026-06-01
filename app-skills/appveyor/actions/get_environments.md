# AppVeyor · `get_environments`

List AppVeyor deployment environments accessible to the connected API token.

- **Service**: `appveyor`
- **Action**: `get_environments`
- **Action id**: `appveyor.get_environments`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "appveyor" --action "get_environments"
```

## Run

```bash
oo connector run "appveyor" --action "get_environments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
