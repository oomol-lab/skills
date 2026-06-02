# Ipregistry · `batch_lookup_ips`

Look up Ipregistry data for multiple IPv4 or IPv6 addresses in one request.

- **Service**: `ipregistry`
- **Action**: `batch_lookup_ips`
- **Action id**: `ipregistry.batch_lookup_ips`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipregistry" --action "batch_lookup_ips"
```

## Run

```bash
oo connector run "ipregistry" --action "batch_lookup_ips" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
