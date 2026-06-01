# Databox · `create_dataset`

Create a Databox dataset within an ingestion data source.

- **Service**: `databox`
- **Action**: `create_dataset`
- **Action id**: `databox.create_dataset`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databox" --action "create_dataset"
```

## Run

```bash
oo connector run "databox" --action "create_dataset" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Databox state. Confirm the exact payload and intended effect with the user before running.
