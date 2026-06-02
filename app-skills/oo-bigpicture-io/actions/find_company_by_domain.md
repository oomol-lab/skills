# BigPicture.io · `find_company_by_domain`

Look up a BigPicture company profile by domain name.

- **Service**: `bigpicture_io`
- **Action**: `find_company_by_domain`
- **Action id**: `bigpicture_io.find_company_by_domain`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bigpicture_io" --action "find_company_by_domain"
```

## Run

```bash
oo connector run "bigpicture_io" --action "find_company_by_domain" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
