# Ipregistry · `lookup_asn`

Look up data for one Autonomous System Number with Ipregistry.

- **Service**: `ipregistry`
- **Action**: `lookup_asn`
- **Action id**: `ipregistry.lookup_asn`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipregistry" --action "lookup_asn"
```

## Run

```bash
oo connector run "ipregistry" --action "lookup_asn" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
