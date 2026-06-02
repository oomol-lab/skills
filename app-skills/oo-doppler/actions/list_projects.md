# Doppler · `list_projects`

List the projects visible in the current Doppler workspace.

- **Service**: `doppler`
- **Action**: `list_projects`
- **Action id**: `doppler.list_projects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "list_projects"
```

## Run

```bash
oo connector run "doppler" --action "list_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
