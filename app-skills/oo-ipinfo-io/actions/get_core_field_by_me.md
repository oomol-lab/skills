# IPinfo · `get_core_field_by_me`

Retrieve a single Lookup API core field for the caller's current IP address.

- **Service**: `ipinfo_io`
- **Action**: `get_core_field_by_me`
- **Action id**: `ipinfo_io.get_core_field_by_me`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipinfo_io" --action "get_core_field_by_me"
```

## Run

```bash
oo connector run "ipinfo_io" --action "get_core_field_by_me" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
