# Databox · `get_dataset_ingestion_status`

Get the processing status of a Databox dataset ingestion.

- **Service**: `databox`
- **Action**: `get_dataset_ingestion_status`
- **Action id**: `databox.get_dataset_ingestion_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databox" --action "get_dataset_ingestion_status"
```

## Run

```bash
oo connector run "databox" --action "get_dataset_ingestion_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
