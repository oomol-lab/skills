# Financial Modeling Prep · `search_names`

Search Financial Modeling Prep securities by company or security name.

- **Service**: `financial_modeling_prep`
- **Action**: `search_names`
- **Action id**: `financial_modeling_prep.search_names`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "financial_modeling_prep" --action "search_names"
```

## Run

```bash
oo connector run "financial_modeling_prep" --action "search_names" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
