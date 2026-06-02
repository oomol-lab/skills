# ipdata.co · `bulk_lookup`

Look up up to 100 IP addresses in a single ipdata bulk API request.

- **Service**: `ipdata_co`
- **Action**: `bulk_lookup`
- **Action id**: `ipdata_co.bulk_lookup`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipdata_co" --action "bulk_lookup"
```

## Run

```bash
oo connector run "ipdata_co" --action "bulk_lookup" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
