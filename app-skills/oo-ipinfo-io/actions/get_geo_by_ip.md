# IPinfo · `get_geo_by_ip`

Retrieve Lookup API geolocation data for a specific IP address, including city, region, country, coordinates, timezone, and postal metadata.

- **Service**: `ipinfo_io`
- **Action**: `get_geo_by_ip`
- **Action id**: `ipinfo_io.get_geo_by_ip`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipinfo_io" --action "get_geo_by_ip"
```

## Run

```bash
oo connector run "ipinfo_io" --action "get_geo_by_ip" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
