# Anthropic · `count_message_tokens`

Count input tokens for an Anthropic message request.

- **Service**: `anthropic`
- **Action**: `count_message_tokens`
- **Action id**: `anthropic.count_message_tokens`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "anthropic" --action "count_message_tokens"
```

## Run

```bash
oo connector run "anthropic" --action "count_message_tokens" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
