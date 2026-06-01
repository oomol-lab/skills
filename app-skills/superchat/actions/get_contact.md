# Superchat · `get_contact`

Get one Superchat contact by contact_id.

- **Service**: `superchat`
- **Action**: `get_contact`
- **Action id**: `superchat.get_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "superchat" --action "get_contact"
```

## Run

```bash
oo connector run "superchat" --action "get_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
