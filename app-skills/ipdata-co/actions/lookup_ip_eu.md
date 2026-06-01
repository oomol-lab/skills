# ipdata.co · `lookup_ip_eu`

Look up a specific IP address with the ipdata EU API endpoint.

- **Service**: `ipdata_co`
- **Action**: `lookup_ip_eu`
- **Action id**: `ipdata_co.lookup_ip_eu`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipdata_co" --action "lookup_ip_eu"
```

## Run

```bash
oo connector run "ipdata_co" --action "lookup_ip_eu" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
