# Gmail · `create_email_draft`

Create a Gmail draft with recipients, subject, body, and optional threading. Use `threadId` to draft a reply in an existing conversation.

- **Service**: `gmail`
- **Action**: `create_email_draft`
- **Action id**: `gmail.create_email_draft`
- **Required scopes**: gmail.compose

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "create_email_draft"
```

## Run

```bash
oo connector run "gmail" --action "create_email_draft" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Gmail state. Confirm the exact payload and intended effect with the user before running.
