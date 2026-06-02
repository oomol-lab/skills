# Postmark · `search_outbound_messages`

Search outbound Postmark messages with filters and pagination.

- **Service**: `postmark`
- **Action**: `search_outbound_messages`
- **Action id**: `postmark.search_outbound_messages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postmark" --action "search_outbound_messages"
```

## Run

```bash
oo connector run "postmark" --action "search_outbound_messages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
