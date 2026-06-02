# Browse AI · `list_robots`

List the Browse AI robots available to the connected API key.

- **Service**: `browse_ai`
- **Action**: `list_robots`
- **Action id**: `browse_ai.list_robots`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "browse_ai" --action "list_robots"
```

## Run

```bash
oo connector run "browse_ai" --action "list_robots" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
