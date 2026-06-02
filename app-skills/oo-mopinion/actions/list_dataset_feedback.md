# Mopinion · `list_dataset_feedback`

List feedback items collected by one Mopinion dataset or feedback form.

- **Service**: `mopinion`
- **Action**: `list_dataset_feedback`
- **Action id**: `mopinion.list_dataset_feedback`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mopinion" --action "list_dataset_feedback"
```

## Run

```bash
oo connector run "mopinion" --action "list_dataset_feedback" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
