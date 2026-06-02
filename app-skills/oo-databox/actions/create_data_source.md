# Databox · `create_data_source`

Create a Databox ingestion data source in an account.

- **Service**: `databox`
- **Action**: `create_data_source`
- **Action id**: `databox.create_data_source`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databox" --action "create_data_source"
```

## Run

```bash
oo connector run "databox" --action "create_data_source" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Databox state. Confirm the exact payload and intended effect with the user before running.
