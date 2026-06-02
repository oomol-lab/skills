# NASA · `get_donki_sep`

Retrieve DONKI solar energetic particle events for a date range.

- **Service**: `nasa`
- **Action**: `get_donki_sep`
- **Action id**: `nasa.get_donki_sep`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nasa" --action "get_donki_sep"
```

## Run

```bash
oo connector run "nasa" --action "get_donki_sep" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
