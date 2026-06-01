# Gmail · `fetch_message_by_thread_id`

Fetch all messages in a Gmail thread. Use this to inspect the full conversation payload for a known `threadId`.

- **Service**: `gmail`
- **Action**: `fetch_message_by_thread_id`
- **Action id**: `gmail.fetch_message_by_thread_id`
- **Required scopes**: gmail.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "fetch_message_by_thread_id"
```

## Run

```bash
oo connector run "gmail" --action "fetch_message_by_thread_id" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
