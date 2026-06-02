# NASA · `get_neo_lookup`

Lookup a specific NASA near-Earth object by asteroid id.

- **Service**: `nasa`
- **Action**: `get_neo_lookup`
- **Action id**: `nasa.get_neo_lookup`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nasa" --action "get_neo_lookup"
```

## Run

```bash
oo connector run "nasa" --action "get_neo_lookup" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
