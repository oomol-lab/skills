# Leexi · `list_teams`

List teams in the current Leexi workspace.

- **Service**: `leexi`
- **Action**: `list_teams`
- **Action id**: `leexi.list_teams`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "leexi" --action "list_teams"
```

## Run

```bash
oo connector run "leexi" --action "list_teams" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
