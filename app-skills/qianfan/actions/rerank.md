# Baidu Qianfan · `rerank`

Score and rank candidate documents against a query with a Baidu Qianfan rerank model.

- **Service**: `qianfan`
- **Action**: `rerank`
- **Action id**: `qianfan.rerank`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "qianfan" --action "rerank"
```

## Run

```bash
oo connector run "qianfan" --action "rerank" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
