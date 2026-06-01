# Telegram Bot · `answer_callback_query`

Answer an inline keyboard callback query.

- **Service**: `telegram`
- **Action**: `answer_callback_query`
- **Action id**: `telegram.answer_callback_query`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "telegram" --action "answer_callback_query"
```

## Run

```bash
oo connector run "telegram" --action "answer_callback_query" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
