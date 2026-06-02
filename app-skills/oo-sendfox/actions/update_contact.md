# SendFox · `update_contact`

Update a SendFox contact's name, list memberships, or custom field values.

- **Service**: `sendfox`
- **Action**: `update_contact`
- **Action id**: `sendfox.update_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendfox" --action "update_contact"
```

## Run

```bash
oo connector run "sendfox" --action "update_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes SendFox state. Confirm the exact payload and intended effect with the user before running.
