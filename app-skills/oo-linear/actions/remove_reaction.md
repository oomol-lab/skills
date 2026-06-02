# Linear · `remove_reaction`

Delete an existing Linear reaction.

- **Service**: `linear`
- **Action**: `remove_reaction`
- **Action id**: `linear.remove_reaction`
- **Required scopes**: linear.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linear" --action "remove_reaction"
```

## Run

```bash
oo connector run "linear" --action "remove_reaction" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Linear data. Always confirm the target and get explicit user approval before running.
