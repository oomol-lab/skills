# Financial Modeling Prep · `get_congressional_trades`

Retrieve senate or house trading disclosure rows.

- **Service**: `financial_modeling_prep`
- **Action**: `get_congressional_trades`
- **Action id**: `financial_modeling_prep.get_congressional_trades`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "financial_modeling_prep" --action "get_congressional_trades"
```

## Run

```bash
oo connector run "financial_modeling_prep" --action "get_congressional_trades" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
