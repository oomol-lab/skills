# Crowdin · `list_projects`

List Crowdin projects.

- **Service**: `crowdin`
- **Action**: `list_projects`
- **Action id**: `crowdin.list_projects`
- **Required scopes**: crowdin.projects.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "crowdin" --action "list_projects"
```

## Run

```bash
oo connector run "crowdin" --action "list_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
