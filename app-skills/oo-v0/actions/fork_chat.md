# v0 · `fork_chat`

Fork an existing v0 chat into a new chat workspace.

- **Service**: `v0`
- **Action**: `fork_chat`
- **Action id**: `v0.fork_chat`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "fork_chat"
```

## Run

```bash
oo connector run "v0" --action "fork_chat" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
