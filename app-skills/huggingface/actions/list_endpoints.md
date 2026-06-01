# Hugging Face · `list_endpoints`

List Hugging Face Inference Endpoints for a namespace.

- **Service**: `huggingface`
- **Action**: `list_endpoints`
- **Action id**: `huggingface.list_endpoints`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "huggingface" --action "list_endpoints"
```

## Run

```bash
oo connector run "huggingface" --action "list_endpoints" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
