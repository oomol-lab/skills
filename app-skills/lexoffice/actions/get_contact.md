# lexoffice · `get_contact`

Retrieve one Lexoffice contact by ID.

- **Service**: `lexoffice`
- **Action**: `get_contact`
- **Action id**: `lexoffice.get_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "lexoffice" --action "get_contact"
```

## Run

```bash
oo connector run "lexoffice" --action "get_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
