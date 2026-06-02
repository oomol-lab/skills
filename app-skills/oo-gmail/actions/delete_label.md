# Gmail · `delete_label`

Permanently delete a user-created Gmail label from the mailbox. This removes the label definition itself rather than just detaching it from one message.

- **Service**: `gmail`
- **Action**: `delete_label`
- **Action id**: `gmail.delete_label`
- **Required scopes**: gmail.labels

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "delete_label"
```

## Run

```bash
oo connector run "gmail" --action "delete_label" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Gmail data. Always confirm the target and get explicit user approval before running.
