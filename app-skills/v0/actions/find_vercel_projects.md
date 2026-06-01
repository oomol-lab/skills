# v0 · `find_vercel_projects`

List Vercel projects linked to the connected v0 workspace.

- **Service**: `v0`
- **Action**: `find_vercel_projects`
- **Action id**: `v0.find_vercel_projects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "find_vercel_projects"
```

## Run

```bash
oo connector run "v0" --action "find_vercel_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
