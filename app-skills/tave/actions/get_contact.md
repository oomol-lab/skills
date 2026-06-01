# Táve · `get_contact`

Fetch one Táve contact by its official ULID identifier.

- **Service**: `tave`
- **Action**: `get_contact`
- **Action id**: `tave.get_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tave" --action "get_contact"
```

## Run

```bash
oo connector run "tave" --action "get_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
