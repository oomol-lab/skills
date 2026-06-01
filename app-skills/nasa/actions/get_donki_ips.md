# NASA · `get_donki_ips`

Retrieve DONKI interplanetary shock events with optional location and catalog filters.

- **Service**: `nasa`
- **Action**: `get_donki_ips`
- **Action id**: `nasa.get_donki_ips`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nasa" --action "get_donki_ips"
```

## Run

```bash
oo connector run "nasa" --action "get_donki_ips" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
