# JobNimbus · `get_contact`

Get one JobNimbus contact by ID.

- **Service**: `jobnimbus`
- **Action**: `get_contact`
- **Action id**: `jobnimbus.get_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "jobnimbus" --action "get_contact"
```

## Run

```bash
oo connector run "jobnimbus" --action "get_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
