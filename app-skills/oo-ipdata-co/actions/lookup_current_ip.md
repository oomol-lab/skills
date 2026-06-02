# ipdata.co · `lookup_current_ip`

Look up the caller's current IP address with the ipdata main API endpoint.

- **Service**: `ipdata_co`
- **Action**: `lookup_current_ip`
- **Action id**: `ipdata_co.lookup_current_ip`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipdata_co" --action "lookup_current_ip"
```

## Run

```bash
oo connector run "ipdata_co" --action "lookup_current_ip" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
