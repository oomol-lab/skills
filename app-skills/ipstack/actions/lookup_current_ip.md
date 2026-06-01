# ipstack · `lookup_current_ip`

Look up the requester IP address and return ipstack geolocation data.

- **Service**: `ipstack`
- **Action**: `lookup_current_ip`
- **Action id**: `ipstack.lookup_current_ip`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipstack" --action "lookup_current_ip"
```

## Run

```bash
oo connector run "ipstack" --action "lookup_current_ip" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
