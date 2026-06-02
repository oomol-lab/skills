# Neon · `get_branch`

Get detailed metadata for a Neon branch.

- **Service**: `neon`
- **Action**: `get_branch`
- **Action id**: `neon.get_branch`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "neon" --action "get_branch"
```

## Run

```bash
oo connector run "neon" --action "get_branch" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
