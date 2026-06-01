# Codemagic · `list_team_apps`

List the applications that belong to a specific Codemagic team.

- **Service**: `codemagic`
- **Action**: `list_team_apps`
- **Action id**: `codemagic.list_team_apps`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "codemagic" --action "list_team_apps"
```

## Run

```bash
oo connector run "codemagic" --action "list_team_apps" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
