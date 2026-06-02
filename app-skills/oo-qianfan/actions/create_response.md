# Baidu Qianfan · `create_response`

Create a non-streaming stored response with the Baidu Qianfan responses API.

- **Service**: `qianfan`
- **Action**: `create_response`
- **Action id**: `qianfan.create_response`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "qianfan" --action "create_response"
```

## Run

```bash
oo connector run "qianfan" --action "create_response" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Baidu Qianfan state. Confirm the exact payload and intended effect with the user before running.
