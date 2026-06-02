# BigPicture.io · `find_company_by_ip`

Look up the company associated with an IPv4 or IPv6 address using BigPicture.

- **Service**: `bigpicture_io`
- **Action**: `find_company_by_ip`
- **Action id**: `bigpicture_io.find_company_by_ip`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bigpicture_io" --action "find_company_by_ip"
```

## Run

```bash
oo connector run "bigpicture_io" --action "find_company_by_ip" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
