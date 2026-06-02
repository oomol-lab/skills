# Neon · `get_project`

Get detailed metadata for a Neon project.

- **Service**: `neon`
- **Action**: `get_project`
- **Action id**: `neon.get_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "neon" --action "get_project"
```

## Run

```bash
oo connector run "neon" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
