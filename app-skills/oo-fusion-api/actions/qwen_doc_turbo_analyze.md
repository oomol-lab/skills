# OOMOL Fusion API · `qwen_doc_turbo_analyze`

Analyze documents with Tongyi Qianwen

- **Service**: `fusion-api`
- **Action**: `qwen_doc_turbo_analyze`
- **Action id**: `fusion-api.qwen_doc_turbo_analyze`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "qwen_doc_turbo_analyze"
```

## Run

```bash
oo connector run "fusion-api" --action "qwen_doc_turbo_analyze" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
