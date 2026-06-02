# ipstack · `bulk_lookup`

Look up multiple IPv4 or IPv6 addresses in one ipstack request.

- **Service**: `ipstack`
- **Action**: `bulk_lookup`
- **Action id**: `ipstack.bulk_lookup`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipstack" --action "bulk_lookup"
```

## Run

```bash
oo connector run "ipstack" --action "bulk_lookup" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
