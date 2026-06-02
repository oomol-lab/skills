# v0 · `get_env_var`

Get a single environment variable from a v0 project.

- **Service**: `v0`
- **Action**: `get_env_var`
- **Action id**: `v0.get_env_var`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "get_env_var"
```

## Run

```bash
oo connector run "v0" --action "get_env_var" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
