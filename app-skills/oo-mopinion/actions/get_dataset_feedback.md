# Mopinion · `get_dataset_feedback`

Fetch one feedback item from a Mopinion dataset or feedback form.

- **Service**: `mopinion`
- **Action**: `get_dataset_feedback`
- **Action id**: `mopinion.get_dataset_feedback`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mopinion" --action "get_dataset_feedback"
```

## Run

```bash
oo connector run "mopinion" --action "get_dataset_feedback" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
