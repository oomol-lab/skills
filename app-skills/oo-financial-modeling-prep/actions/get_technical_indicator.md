# Financial Modeling Prep · `get_technical_indicator`

Retrieve technical indicator rows for one symbol.

- **Service**: `financial_modeling_prep`
- **Action**: `get_technical_indicator`
- **Action id**: `financial_modeling_prep.get_technical_indicator`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "financial_modeling_prep" --action "get_technical_indicator"
```

## Run

```bash
oo connector run "financial_modeling_prep" --action "get_technical_indicator" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
