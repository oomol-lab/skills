# Baidu Qianfan · `create_embeddings`

Generate embedding vectors for one or more input strings with Baidu Qianfan.

- **Service**: `qianfan`
- **Action**: `create_embeddings`
- **Action id**: `qianfan.create_embeddings`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "qianfan" --action "create_embeddings"
```

## Run

```bash
oo connector run "qianfan" --action "create_embeddings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Baidu Qianfan state. Confirm the exact payload and intended effect with the user before running.
