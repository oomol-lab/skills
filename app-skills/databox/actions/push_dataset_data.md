# Databox · `push_dataset_data`

Push JSON records into a Databox dataset.

- **Service**: `databox`
- **Action**: `push_dataset_data`
- **Action id**: `databox.push_dataset_data`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databox" --action "push_dataset_data"
```

## Run

```bash
oo connector run "databox" --action "push_dataset_data" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
