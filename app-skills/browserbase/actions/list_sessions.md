# Browserbase · `list_sessions`

List Browserbase sessions with optional status or metadata query filters.

- **Service**: `browserbase`
- **Action**: `list_sessions`
- **Action id**: `browserbase.list_sessions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "browserbase" --action "list_sessions"
```

## Run

```bash
oo connector run "browserbase" --action "list_sessions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
