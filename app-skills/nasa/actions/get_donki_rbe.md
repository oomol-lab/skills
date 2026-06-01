# NASA · `get_donki_rbe`

Retrieve DONKI radiation belt enhancement events for a date range.

- **Service**: `nasa`
- **Action**: `get_donki_rbe`
- **Action id**: `nasa.get_donki_rbe`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nasa" --action "get_donki_rbe"
```

## Run

```bash
oo connector run "nasa" --action "get_donki_rbe" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
