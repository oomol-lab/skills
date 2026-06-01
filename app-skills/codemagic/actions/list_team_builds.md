# Codemagic · `list_team_builds`

List builds for a specific Codemagic team with optional filters.

- **Service**: `codemagic`
- **Action**: `list_team_builds`
- **Action id**: `codemagic.list_team_builds`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "codemagic" --action "list_team_builds"
```

## Run

```bash
oo connector run "codemagic" --action "list_team_builds" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
