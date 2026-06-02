# Manus · `create_project`

Create a Manus project for grouping tasks under shared instructions.

- **Service**: `manus`
- **Action**: `create_project`
- **Action id**: `manus.create_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "manus" --action "create_project"
```

## Run

```bash
oo connector run "manus" --action "create_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Manus state. Confirm the exact payload and intended effect with the user before running.
