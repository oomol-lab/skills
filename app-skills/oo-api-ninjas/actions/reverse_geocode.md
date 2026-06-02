# API Ninjas · `reverse_geocode`

Resolve latitude and longitude coordinates into place metadata.

- **Service**: `api_ninjas`
- **Action**: `reverse_geocode`
- **Action id**: `api_ninjas.reverse_geocode`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "api_ninjas" --action "reverse_geocode"
```

## Run

```bash
oo connector run "api_ninjas" --action "reverse_geocode" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
