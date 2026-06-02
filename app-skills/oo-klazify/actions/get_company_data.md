# Klazify · `get_company_data`

Return company profile data for one website URL with Klazify.

- **Service**: `klazify`
- **Action**: `get_company_data`
- **Action id**: `klazify.get_company_data`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "klazify" --action "get_company_data"
```

## Run

```bash
oo connector run "klazify" --action "get_company_data" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
