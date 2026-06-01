# ParseHub · `list_projects`

List ParseHub projects accessible to the API key with optional offset pagination.

- **Service**: `parsehub`
- **Action**: `list_projects`
- **Action id**: `parsehub.list_projects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "parsehub" --action "list_projects"
```

## Run

```bash
oo connector run "parsehub" --action "list_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
