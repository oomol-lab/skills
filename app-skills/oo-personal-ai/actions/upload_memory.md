# Personal AI · `upload_memory`

Upload one plain text memory to a Personal AI persona memory stack.

- **Service**: `personal_ai`
- **Action**: `upload_memory`
- **Action id**: `personal_ai.upload_memory`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "personal_ai" --action "upload_memory"
```

## Run

```bash
oo connector run "personal_ai" --action "upload_memory" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Personal AI state. Confirm the exact payload and intended effect with the user before running.
