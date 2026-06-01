# Beeminder · `create_datapoint`

Create one datapoint on a Beeminder goal.

- **Service**: `beeminder`
- **Action**: `create_datapoint`
- **Action id**: `beeminder.create_datapoint`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "beeminder" --action "create_datapoint"
```

## Run

```bash
oo connector run "beeminder" --action "create_datapoint" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Beeminder state. Confirm the exact payload and intended effect with the user before running.
