# Browserbase · `get_context`

Get one Browserbase context by context identifier.

- **Service**: `browserbase`
- **Action**: `get_context`
- **Action id**: `browserbase.get_context`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "browserbase" --action "get_context"
```

## Run

```bash
oo connector run "browserbase" --action "get_context" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
