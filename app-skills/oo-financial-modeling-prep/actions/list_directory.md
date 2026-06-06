# Financial Modeling Prep · `list_directory`

List Financial Modeling Prep directory rows such as stocks, ETFs, and exchanges.

- **Service**: `financial_modeling_prep`
- **Action**: `list_directory`
- **Action id**: `financial_modeling_prep.list_directory`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "financial_modeling_prep" --action "list_directory"
```

## Run

```bash
oo connector run "financial_modeling_prep" --action "list_directory" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
