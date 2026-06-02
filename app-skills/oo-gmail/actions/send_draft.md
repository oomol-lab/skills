# Gmail · `send_draft`

Send an existing Gmail draft as-is using the recipients already stored in the draft. Sending is immediate and cannot be scheduled by this action.

- **Service**: `gmail`
- **Action**: `send_draft`
- **Action id**: `gmail.send_draft`
- **Required scopes**: gmail.compose

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "send_draft"
```

## Run

```bash
oo connector run "gmail" --action "send_draft" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Gmail state. Confirm the exact payload and intended effect with the user before running.
