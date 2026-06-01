# Postmark · `get_outbound_message_details`

Get detailed content and events for one outbound Postmark message.

- **Service**: `postmark`
- **Action**: `get_outbound_message_details`
- **Action id**: `postmark.get_outbound_message_details`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postmark" --action "get_outbound_message_details"
```

## Run

```bash
oo connector run "postmark" --action "get_outbound_message_details" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
