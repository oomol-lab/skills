# sevdesk · `update_contact`

Update an existing sevdesk contact using the official contact update payload fields.

- **Service**: `sevdesk`
- **Action**: `update_contact`
- **Action id**: `sevdesk.update_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sevdesk" --action "update_contact"
```

## Run

```bash
oo connector run "sevdesk" --action "update_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes sevdesk state. Confirm the exact payload and intended effect with the user before running.
