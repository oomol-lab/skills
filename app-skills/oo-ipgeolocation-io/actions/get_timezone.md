# IPGeolocation.io · `get_timezone`

Get time zone information by IP address, coordinates, location, or time zone name.

- **Service**: `ipgeolocation_io`
- **Action**: `get_timezone`
- **Action id**: `ipgeolocation_io.get_timezone`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipgeolocation_io" --action "get_timezone"
```

## Run

```bash
oo connector run "ipgeolocation_io" --action "get_timezone" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
