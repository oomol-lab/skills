# NASA · `get_donki_wsa_enlil`

Retrieve DONKI WSA-Enlil simulation runs for a date range.

- **Service**: `nasa`
- **Action**: `get_donki_wsa_enlil`
- **Action id**: `nasa.get_donki_wsa_enlil`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nasa" --action "get_donki_wsa_enlil"
```

## Run

```bash
oo connector run "nasa" --action "get_donki_wsa_enlil" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
