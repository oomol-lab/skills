# Browserbase · `get_project_usage`

Get Browserbase browser minute and proxy byte usage for one project, defaulting to the connected project.

- **Service**: `browserbase`
- **Action**: `get_project_usage`
- **Action id**: `browserbase.get_project_usage`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "browserbase" --action "get_project_usage"
```

## Run

```bash
oo connector run "browserbase" --action "get_project_usage" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
