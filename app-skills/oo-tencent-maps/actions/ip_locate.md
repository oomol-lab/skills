# Tencent Maps · `ip_locate`

Locate an IP address with Tencent Maps IP geolocation.

- **Service**: `tencent_maps`
- **Action**: `ip_locate`
- **Action id**: `tencent_maps.ip_locate`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tencent_maps" --action "ip_locate"
```

## Run

```bash
oo connector run "tencent_maps" --action "ip_locate" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
