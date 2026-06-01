# Gmail · `fetch_message_by_message_id`

Fetch a Gmail message by message ID with a controllable response format. Use this when you need the normalized full message payload instead of the simplified `get_message` output.

- **Service**: `gmail`
- **Action**: `fetch_message_by_message_id`
- **Action id**: `gmail.fetch_message_by_message_id`
- **Required scopes**: gmail.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "fetch_message_by_message_id"
```

## Run

```bash
oo connector run "gmail" --action "fetch_message_by_message_id" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
