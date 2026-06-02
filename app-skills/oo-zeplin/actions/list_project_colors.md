# Zeplin · `list_project_colors`

List color tokens defined for a Zeplin project.

- **Service**: `zeplin`
- **Action**: `list_project_colors`
- **Action id**: `zeplin.list_project_colors`
- **Required scopes**: zeplin.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zeplin" --action "list_project_colors"
```

## Run

```bash
oo connector run "zeplin" --action "list_project_colors" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
