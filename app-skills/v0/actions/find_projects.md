# v0 · `find_projects`

List v0 projects available to the connected account.

- **Service**: `v0`
- **Action**: `find_projects`
- **Action id**: `v0.find_projects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "find_projects"
```

## Run

```bash
oo connector run "v0" --action "find_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
