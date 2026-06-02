# Amara · `list_teams`

List the Amara teams accessible to the current API key with pagination controls.

- **Service**: `amara`
- **Action**: `list_teams`
- **Action id**: `amara.list_teams`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amara" --action "list_teams"
```

## Run

```bash
oo connector run "amara" --action "list_teams" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
