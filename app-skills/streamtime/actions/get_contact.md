# Streamtime · `get_contact`

Get a Streamtime contact by ID.

- **Service**: `streamtime`
- **Action**: `get_contact`
- **Action id**: `streamtime.get_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "streamtime" --action "get_contact"
```

## Run

```bash
oo connector run "streamtime" --action "get_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
