# CollegeFootballData · `list_teams`

List college football teams from CollegeFootballData with optional year and conference filters.

- **Service**: `college_football_data`
- **Action**: `list_teams`
- **Action id**: `college_football_data.list_teams`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "college_football_data" --action "list_teams"
```

## Run

```bash
oo connector run "college_football_data" --action "list_teams" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
