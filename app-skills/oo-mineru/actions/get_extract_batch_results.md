# MinerU · `get_extract_batch_results`

Get the current status and result URLs for a MinerU extraction batch.

- **Service**: `mineru`
- **Action**: `get_extract_batch_results`
- **Action id**: `mineru.get_extract_batch_results`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mineru" --action "get_extract_batch_results"
```

## Run

```bash
oo connector run "mineru" --action "get_extract_batch_results" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
