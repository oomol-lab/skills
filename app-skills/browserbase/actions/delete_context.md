# Browserbase · `delete_context`

Delete one Browserbase context by context identifier.

- **Service**: `browserbase`
- **Action**: `delete_context`
- **Action id**: `browserbase.delete_context`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "browserbase" --action "delete_context"
```

## Run

```bash
oo connector run "browserbase" --action "delete_context" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Browserbase data. Always confirm the target and get explicit user approval before running.
