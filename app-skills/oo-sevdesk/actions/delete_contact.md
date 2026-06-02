# sevdesk · `delete_contact`

Delete a sevdesk contact by its identifier.

- **Service**: `sevdesk`
- **Action**: `delete_contact`
- **Action id**: `sevdesk.delete_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sevdesk" --action "delete_contact"
```

## Run

```bash
oo connector run "sevdesk" --action "delete_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites sevdesk data. Always confirm the target and get explicit user approval before running.
