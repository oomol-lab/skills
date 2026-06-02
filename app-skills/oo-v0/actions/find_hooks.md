# v0 · `find_hooks`

List webhook hooks configured in the connected v0 workspace.

- **Service**: `v0`
- **Action**: `find_hooks`
- **Action id**: `v0.find_hooks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "find_hooks"
```

## Run

```bash
oo connector run "v0" --action "find_hooks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
