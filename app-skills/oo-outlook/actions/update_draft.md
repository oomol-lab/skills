# Outlook · `update_draft`

Update an existing Outlook draft message. Use this to revise the subject, body, recipients, or other draft-only properties before sending.

- **Service**: `outlook`
- **Action**: `update_draft`
- **Action id**: `outlook.update_draft`
- **Required scopes**: outlook.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "outlook" --action "update_draft"
```

## Run

```bash
oo connector run "outlook" --action "update_draft" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Outlook state. Confirm the exact payload and intended effect with the user before running.
