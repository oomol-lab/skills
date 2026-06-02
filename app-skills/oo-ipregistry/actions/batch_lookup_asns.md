# Ipregistry · `batch_lookup_asns`

Look up data for multiple Autonomous System Numbers with Ipregistry.

- **Service**: `ipregistry`
- **Action**: `batch_lookup_asns`
- **Action id**: `ipregistry.batch_lookup_asns`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipregistry" --action "batch_lookup_asns"
```

## Run

```bash
oo connector run "ipregistry" --action "batch_lookup_asns" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
