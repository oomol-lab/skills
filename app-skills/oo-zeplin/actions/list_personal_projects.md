# Zeplin · `list_personal_projects`

List projects in the current user's Zeplin personal workspace.

- **Service**: `zeplin`
- **Action**: `list_personal_projects`
- **Action id**: `zeplin.list_personal_projects`
- **Required scopes**: zeplin.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zeplin" --action "list_personal_projects"
```

## Run

```bash
oo connector run "zeplin" --action "list_personal_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
