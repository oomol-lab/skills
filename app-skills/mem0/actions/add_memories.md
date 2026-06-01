# Mem0 · `add_memories`

Add new memories to Mem0 from messages or direct memory text.

- **Service**: `mem0`
- **Action**: `add_memories`
- **Action id**: `mem0.add_memories`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mem0" --action "add_memories"
```

## Run

```bash
oo connector run "mem0" --action "add_memories" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mem0 state. Confirm the exact payload and intended effect with the user before running.
