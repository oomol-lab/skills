# Mistral AI · `list_batch_jobs`

List batch jobs, with paging and filtering conditions.

- **Service**: `mistral_ai`
- **Action**: `list_batch_jobs`
- **Action id**: `mistral_ai.list_batch_jobs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "list_batch_jobs"
```

## Run

```bash
oo connector run "mistral_ai" --action "list_batch_jobs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
