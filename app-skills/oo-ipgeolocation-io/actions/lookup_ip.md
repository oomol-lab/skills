# IPGeolocation.io · `lookup_ip`

Look up IP geolocation data with optional field controls.

- **Service**: `ipgeolocation_io`
- **Action**: `lookup_ip`
- **Action id**: `ipgeolocation_io.lookup_ip`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipgeolocation_io" --action "lookup_ip"
```

## Run

```bash
oo connector run "ipgeolocation_io" --action "lookup_ip" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
