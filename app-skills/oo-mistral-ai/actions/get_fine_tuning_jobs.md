# Mistral AI · `get_fine_tuning_jobs`

List fine-tuning jobs, with paging and filtering conditions.

- **Service**: `mistral_ai`
- **Action**: `get_fine_tuning_jobs`
- **Action id**: `mistral_ai.get_fine_tuning_jobs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "get_fine_tuning_jobs"
```

## Run

```bash
oo connector run "mistral_ai" --action "get_fine_tuning_jobs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
