# PandaDoc · `create_or_update_contact`

Create a PandaDoc contact, or update the existing contact that matches the provided email address.

- **Service**: `pandadoc`
- **Action**: `create_or_update_contact`
- **Action id**: `pandadoc.create_or_update_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pandadoc" --action "create_or_update_contact"
```

## Run

```bash
oo connector run "pandadoc" --action "create_or_update_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes PandaDoc state. Confirm the exact payload and intended effect with the user before running.
