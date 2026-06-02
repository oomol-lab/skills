# AMap · `ip_locate`

Locate by IP address.

- **Service**: `amap`
- **Action**: `ip_locate`
- **Action id**: `amap.ip_locate`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amap" --action "ip_locate"
```

## Run

```bash
oo connector run "amap" --action "ip_locate" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
