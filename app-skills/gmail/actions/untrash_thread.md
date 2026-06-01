# Gmail · `untrash_thread`

Restore a previously trashed Gmail thread and its messages.

- **Service**: `gmail`
- **Action**: `untrash_thread`
- **Action id**: `gmail.untrash_thread`
- **Required scopes**: gmail.modify

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "untrash_thread"
```

## Run

```bash
oo connector run "gmail" --action "untrash_thread" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
