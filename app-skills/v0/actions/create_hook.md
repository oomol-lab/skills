# v0 · `create_hook`

Create a webhook hook in v0 for chat or message events.

- **Service**: `v0`
- **Action**: `create_hook`
- **Action id**: `v0.create_hook`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "create_hook"
```

## Run

```bash
oo connector run "v0" --action "create_hook" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes v0 state. Confirm the exact payload and intended effect with the user before running.
