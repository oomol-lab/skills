# Financial Modeling Prep · `get_calendar`

Retrieve Financial Modeling Prep market calendar rows.

- **Service**: `financial_modeling_prep`
- **Action**: `get_calendar`
- **Action id**: `financial_modeling_prep.get_calendar`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "financial_modeling_prep" --action "get_calendar"
```

## Run

```bash
oo connector run "financial_modeling_prep" --action "get_calendar" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
