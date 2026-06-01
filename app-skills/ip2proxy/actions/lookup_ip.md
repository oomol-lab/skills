# IP2Proxy · `lookup_ip`

Detect whether one IPv4 or IPv6 address is a proxy and return the official IP2Proxy lookup payload.

- **Service**: `ip2proxy`
- **Action**: `lookup_ip`
- **Action id**: `ip2proxy.lookup_ip`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ip2proxy" --action "lookup_ip"
```

## Run

```bash
oo connector run "ip2proxy" --action "lookup_ip" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
