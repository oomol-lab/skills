# IPinfo · `get_current_region`

Retrieve the caller's current region or state name.

- **Service**: `ipinfo_io`
- **Action**: `get_current_region`
- **Action id**: `ipinfo_io.get_current_region`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipinfo_io" --action "get_current_region"
```

## Run

```bash
oo connector run "ipinfo_io" --action "get_current_region" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
