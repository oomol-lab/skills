# CollegeFootballData · `list_venues`

List college football venues from CollegeFootballData.

- **Service**: `college_football_data`
- **Action**: `list_venues`
- **Action id**: `college_football_data.list_venues`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "college_football_data" --action "list_venues"
```

## Run

```bash
oo connector run "college_football_data" --action "list_venues" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
