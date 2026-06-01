# Mailtrap · `get_contact`

Get one Mailtrap contact by UUID or email.

- **Service**: `mailtrap`
- **Action**: `get_contact`
- **Action id**: `mailtrap.get_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "get_contact"
```

## Run

```bash
oo connector run "mailtrap" --action "get_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
