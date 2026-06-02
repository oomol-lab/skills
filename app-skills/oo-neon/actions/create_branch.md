# Neon · `create_branch`

Create a branch in a Neon project.

- **Service**: `neon`
- **Action**: `create_branch`
- **Action id**: `neon.create_branch`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "neon" --action "create_branch"
```

## Run

```bash
oo connector run "neon" --action "create_branch" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Neon state. Confirm the exact payload and intended effect with the user before running.
