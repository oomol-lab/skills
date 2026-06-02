# v0 · `create_env_vars`

Create one or more environment variables on a v0 project.

- **Service**: `v0`
- **Action**: `create_env_vars`
- **Action id**: `v0.create_env_vars`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "create_env_vars"
```

## Run

```bash
oo connector run "v0" --action "create_env_vars" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes v0 state. Confirm the exact payload and intended effect with the user before running.
