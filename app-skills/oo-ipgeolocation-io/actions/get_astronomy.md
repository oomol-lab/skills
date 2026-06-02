# IPGeolocation.io · `get_astronomy`

Get sunrise, sunset, moonrise, moonset, and moon phase data for a location.

- **Service**: `ipgeolocation_io`
- **Action**: `get_astronomy`
- **Action id**: `ipgeolocation_io.get_astronomy`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipgeolocation_io" --action "get_astronomy"
```

## Run

```bash
oo connector run "ipgeolocation_io" --action "get_astronomy" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
