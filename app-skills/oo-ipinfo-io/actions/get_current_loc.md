# IPinfo · `get_current_loc`

Retrieve the caller's current coordinates in `latitude,longitude` format.

- **Service**: `ipinfo_io`
- **Action**: `get_current_loc`
- **Action id**: `ipinfo_io.get_current_loc`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipinfo_io" --action "get_current_loc"
```

## Run

```bash
oo connector run "ipinfo_io" --action "get_current_loc" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
