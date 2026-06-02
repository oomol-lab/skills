# Outlook · `create_draft`

Create a new Outlook draft message with subject, body, recipients, and other writable message properties.

- **Service**: `outlook`
- **Action**: `create_draft`
- **Action id**: `outlook.create_draft`
- **Required scopes**: outlook.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "outlook" --action "create_draft"
```

## Run

```bash
oo connector run "outlook" --action "create_draft" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Outlook state. Confirm the exact payload and intended effect with the user before running.
