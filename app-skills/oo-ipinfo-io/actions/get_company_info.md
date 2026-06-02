# IPinfo · `get_company_info`

Retrieve company enrichment data for a specific IP address when the token includes that dataset.

- **Service**: `ipinfo_io`
- **Action**: `get_company_info`
- **Action id**: `ipinfo_io.get_company_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipinfo_io" --action "get_company_info"
```

## Run

```bash
oo connector run "ipinfo_io" --action "get_company_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
