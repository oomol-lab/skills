# Browserbase · `list_projects`

List the Browserbase projects visible to the current API key.

- **Service**: `browserbase`
- **Action**: `list_projects`
- **Action id**: `browserbase.list_projects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "browserbase" --action "list_projects"
```

## Run

```bash
oo connector run "browserbase" --action "list_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
