# SendFox · `unsubscribe_contact`

Unsubscribe a SendFox contact by email address.

- **Service**: `sendfox`
- **Action**: `unsubscribe_contact`
- **Action id**: `sendfox.unsubscribe_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendfox" --action "unsubscribe_contact"
```

## Run

```bash
oo connector run "sendfox" --action "unsubscribe_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites SendFox data. Always confirm the target and get explicit user approval before running.
