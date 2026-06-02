# ipdata.co · `lookup_basic_asn_by_ip`

Look up a specific IP address and return only the ASN object from the ipdata response.

- **Service**: `ipdata_co`
- **Action**: `lookup_basic_asn_by_ip`
- **Action id**: `ipdata_co.lookup_basic_asn_by_ip`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipdata_co" --action "lookup_basic_asn_by_ip"
```

## Run

```bash
oo connector run "ipdata_co" --action "lookup_basic_asn_by_ip" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
