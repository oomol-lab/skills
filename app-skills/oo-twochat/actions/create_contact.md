# 2Chat · `create_contact`

Create a contact in 2Chat with one or more contact details and optional channel and profile picture metadata.

- **Service**: `twochat`
- **Action**: `create_contact`
- **Action id**: `twochat.create_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twochat" --action "create_contact"
```

## Run

```bash
oo connector run "twochat" --action "create_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes 2Chat state. Confirm the exact payload and intended effect with the user before running.
