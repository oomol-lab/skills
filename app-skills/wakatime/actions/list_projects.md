# WakaTime · `list_projects`

List WakaTime projects for the authenticated user.

- **Service**: `wakatime`
- **Action**: `list_projects`
- **Action id**: `wakatime.list_projects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "wakatime" --action "list_projects"
```

## Run

```bash
oo connector run "wakatime" --action "list_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
