# Baidu Qianfan · `get_batch`

Fetch a Baidu Qianfan batch prediction job by its identifier.

- **Service**: `qianfan`
- **Action**: `get_batch`
- **Action id**: `qianfan.get_batch`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "qianfan" --action "get_batch"
```

## Run

```bash
oo connector run "qianfan" --action "get_batch" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
