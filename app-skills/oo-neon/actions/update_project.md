# Neon · `update_project`

Update a Neon project name or history retention period.

- **Service**: `neon`
- **Action**: `update_project`
- **Action id**: `neon.update_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "neon" --action "update_project"
```

## Run

```bash
oo connector run "neon" --action "update_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Neon state. Confirm the exact payload and intended effect with the user before running.
