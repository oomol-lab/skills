# Financial Modeling Prep · `get_ratings`

Retrieve rating snapshot, historical rating, or historical grade rows.

- **Service**: `financial_modeling_prep`
- **Action**: `get_ratings`
- **Action id**: `financial_modeling_prep.get_ratings`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "financial_modeling_prep" --action "get_ratings"
```

## Run

```bash
oo connector run "financial_modeling_prep" --action "get_ratings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
