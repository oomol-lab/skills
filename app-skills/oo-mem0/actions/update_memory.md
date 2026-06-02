# Mem0 · `update_memory`

Update text or metadata of a Mem0 memory by memory ID.

- **Service**: `mem0`
- **Action**: `update_memory`
- **Action id**: `mem0.update_memory`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mem0" --action "update_memory"
```

## Run

```bash
oo connector run "mem0" --action "update_memory" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mem0 state. Confirm the exact payload and intended effect with the user before running.
