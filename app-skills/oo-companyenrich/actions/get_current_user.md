# CompanyEnrich · `get_current_user`

Get the authenticated CompanyEnrich user summary and remaining capabilities.

- **Service**: `companyenrich`
- **Action**: `get_current_user`
- **Action id**: `companyenrich.get_current_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "companyenrich" --action "get_current_user"
```

## Run

```bash
oo connector run "companyenrich" --action "get_current_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
