# Neon · `update_branch`

Update a Neon branch name or protection status.

- **Service**: `neon`
- **Action**: `update_branch`
- **Action id**: `neon.update_branch`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "neon" --action "update_branch"
```

## Run

```bash
oo connector run "neon" --action "update_branch" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Neon state. Confirm the exact payload and intended effect with the user before running.
