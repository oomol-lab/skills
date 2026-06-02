# sevdesk · `create_contact`

Create a new sevdesk contact using the official contact payload fields.

- **Service**: `sevdesk`
- **Action**: `create_contact`
- **Action id**: `sevdesk.create_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sevdesk" --action "create_contact"
```

## Run

```bash
oo connector run "sevdesk" --action "create_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes sevdesk state. Confirm the exact payload and intended effect with the user before running.
