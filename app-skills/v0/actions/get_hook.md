# v0 · `get_hook`

Get a single webhook hook by hook ID.

- **Service**: `v0`
- **Action**: `get_hook`
- **Action id**: `v0.get_hook`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "get_hook"
```

## Run

```bash
oo connector run "v0" --action "get_hook" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
