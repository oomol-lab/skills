# Financial Modeling Prep · `get_sec_filings`

Search SEC filing rows by symbol, CIK, or form type.

- **Service**: `financial_modeling_prep`
- **Action**: `get_sec_filings`
- **Action id**: `financial_modeling_prep.get_sec_filings`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "financial_modeling_prep" --action "get_sec_filings"
```

## Run

```bash
oo connector run "financial_modeling_prep" --action "get_sec_filings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
