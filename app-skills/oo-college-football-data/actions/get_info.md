# CollegeFootballData · `get_info`

Get CollegeFootballData account information including patron level and remaining calls.

- **Service**: `college_football_data`
- **Action**: `get_info`
- **Action id**: `college_football_data.get_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "college_football_data" --action "get_info"
```

## Run

```bash
oo connector run "college_football_data" --action "get_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
