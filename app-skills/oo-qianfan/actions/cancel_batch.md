# Baidu Qianfan · `cancel_batch`

Cancel a Baidu Qianfan batch prediction job by its identifier.

- **Service**: `qianfan`
- **Action**: `cancel_batch`
- **Action id**: `qianfan.cancel_batch`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "qianfan" --action "cancel_batch"
```

## Run

```bash
oo connector run "qianfan" --action "cancel_batch" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
