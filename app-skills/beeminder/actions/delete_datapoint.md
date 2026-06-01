# Beeminder · `delete_datapoint`

Delete one Beeminder datapoint by ID.

- **Service**: `beeminder`
- **Action**: `delete_datapoint`
- **Action id**: `beeminder.delete_datapoint`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "beeminder" --action "delete_datapoint"
```

## Run

```bash
oo connector run "beeminder" --action "delete_datapoint" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Beeminder data. Always confirm the target and get explicit user approval before running.
