# Alpha Vantage · `get_ipo_calendar`

Retrieve raw upcoming IPO calendar data as CSV.

- **Service**: `alpha_vantage`
- **Action**: `get_ipo_calendar`
- **Action id**: `alpha_vantage.get_ipo_calendar`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alpha_vantage" --action "get_ipo_calendar"
```

## Run

```bash
oo connector run "alpha_vantage" --action "get_ipo_calendar" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
