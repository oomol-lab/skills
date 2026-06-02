# Postman · `get_duplication_task_status`

Tool to get the status of a collection duplication task. Use when you need to check whether a previously initiated collection duplication is still processing or has completed. The task ID must first be obtained from the POST /collections/{collectionId}/duplicates endpoint.

- **Service**: `postman`
- **Action**: `get_duplication_task_status`
- **Action id**: `postman.get_duplication_task_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_duplication_task_status"
```

## Run

```bash
oo connector run "postman" --action "get_duplication_task_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
