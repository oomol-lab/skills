# Systeme.io · `get_contact`

Get a single contact from Systeme.io by ID.

- **Service**: `systeme_io`
- **Action**: `get_contact`
- **Action id**: `systeme_io.get_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "systeme_io" --action "get_contact"
```

## Run

```bash
oo connector run "systeme_io" --action "get_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
