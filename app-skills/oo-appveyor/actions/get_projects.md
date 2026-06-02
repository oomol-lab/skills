# AppVeyor · `get_projects`

List AppVeyor projects accessible to the connected API token.

- **Service**: `appveyor`
- **Action**: `get_projects`
- **Action id**: `appveyor.get_projects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "appveyor" --action "get_projects"
```

## Run

```bash
oo connector run "appveyor" --action "get_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
