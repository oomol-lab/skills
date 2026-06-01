# Gmail · `untrash_message`

Restore a previously trashed Gmail message back to the mailbox.

- **Service**: `gmail`
- **Action**: `untrash_message`
- **Action id**: `gmail.untrash_message`
- **Required scopes**: gmail.modify

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "untrash_message"
```

## Run

```bash
oo connector run "gmail" --action "untrash_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
