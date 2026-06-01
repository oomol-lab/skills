# V2EX · `delete_notification`

Delete one V2EX notification by its numeric identifier.

- **Service**: `v2ex`
- **Action**: `delete_notification`
- **Action id**: `v2ex.delete_notification`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v2ex" --action "delete_notification"
```

## Run

```bash
oo connector run "v2ex" --action "delete_notification" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites V2EX data. Always confirm the target and get explicit user approval before running.
