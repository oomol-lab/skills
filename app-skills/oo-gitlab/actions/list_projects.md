# GitLab · `list_projects`

List GitLab projects visible to the authenticated personal access token, with optional search and membership filters.

- **Service**: `gitlab`
- **Action**: `list_projects`
- **Action id**: `gitlab.list_projects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gitlab" --action "list_projects"
```

## Run

```bash
oo connector run "gitlab" --action "list_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
