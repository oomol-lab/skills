# ipstack · `lookup_ip`

Look up a single IPv4 or IPv6 address and return ipstack geolocation data.

- **Service**: `ipstack`
- **Action**: `lookup_ip`
- **Action id**: `ipstack.lookup_ip`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipstack" --action "lookup_ip"
```

## Run

```bash
oo connector run "ipstack" --action "lookup_ip" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
