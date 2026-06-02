# v0 · `find_env_vars`

List environment variables configured on a v0 project.

- **Service**: `v0`
- **Action**: `find_env_vars`
- **Action id**: `v0.find_env_vars`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "find_env_vars"
```

## Run

```bash
oo connector run "v0" --action "find_env_vars" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
