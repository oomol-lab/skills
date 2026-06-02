# IP2Location.io · `get_ip_geolocation`

Retrieve geolocation and network metadata for one IPv4 or IPv6 address.

- **Service**: `ip2location`
- **Action**: `get_ip_geolocation`
- **Action id**: `ip2location.get_ip_geolocation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ip2location" --action "get_ip_geolocation"
```

## Run

```bash
oo connector run "ip2location" --action "get_ip_geolocation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
