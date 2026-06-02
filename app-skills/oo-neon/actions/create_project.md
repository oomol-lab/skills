# Neon · `create_project`

Create a Neon project with an optional default branch configuration.

- **Service**: `neon`
- **Action**: `create_project`
- **Action id**: `neon.create_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "neon" --action "create_project"
```

## Run

```bash
oo connector run "neon" --action "create_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Neon state. Confirm the exact payload and intended effect with the user before running.
