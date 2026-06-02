# Baidu Qianfan · `create_ai_search_completion`

Create a non-streaming AI search chat completion with Baidu Qianfan.

- **Service**: `qianfan`
- **Action**: `create_ai_search_completion`
- **Action id**: `qianfan.create_ai_search_completion`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "qianfan" --action "create_ai_search_completion"
```

## Run

```bash
oo connector run "qianfan" --action "create_ai_search_completion" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Baidu Qianfan state. Confirm the exact payload and intended effect with the user before running.
