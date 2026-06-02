# ipdata.co · `lookup_advanced_asn`

Look up advanced autonomous system details by ASN number with the ipdata ASN endpoint.

- **Service**: `ipdata_co`
- **Action**: `lookup_advanced_asn`
- **Action id**: `ipdata_co.lookup_advanced_asn`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipdata_co" --action "lookup_advanced_asn"
```

## Run

```bash
oo connector run "ipdata_co" --action "lookup_advanced_asn" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
