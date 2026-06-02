# Amara · `get_team_details`

Fetch a single Amara team by team slug.

- **Service**: `amara`
- **Action**: `get_team_details`
- **Action id**: `amara.get_team_details`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amara" --action "get_team_details"
```

## Run

```bash
oo connector run "amara" --action "get_team_details" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
