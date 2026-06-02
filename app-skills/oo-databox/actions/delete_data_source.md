# Databox · `delete_data_source`

Delete a Databox data source by ID.

- **Service**: `databox`
- **Action**: `delete_data_source`
- **Action id**: `databox.delete_data_source`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databox" --action "delete_data_source"
```

## Run

```bash
oo connector run "databox" --action "delete_data_source" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Databox data. Always confirm the target and get explicit user approval before running.
