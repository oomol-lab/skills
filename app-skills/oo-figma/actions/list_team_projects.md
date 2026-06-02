# Figma · `list_team_projects`

List projects visible to the authenticated user in a Figma team.

- **Service**: `figma`
- **Action**: `list_team_projects`
- **Action id**: `figma.list_team_projects`
- **Required scopes**: projects:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "figma" --action "list_team_projects"
```

## Run

```bash
oo connector run "figma" --action "list_team_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
