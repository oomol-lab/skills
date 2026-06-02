# v0 · `assign_project_to_chat`

Assign an existing v0 chat to a project container.

- **Service**: `v0`
- **Action**: `assign_project_to_chat`
- **Action id**: `v0.assign_project_to_chat`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "assign_project_to_chat"
```

## Run

```bash
oo connector run "v0" --action "assign_project_to_chat" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes v0 state. Confirm the exact payload and intended effect with the user before running.
