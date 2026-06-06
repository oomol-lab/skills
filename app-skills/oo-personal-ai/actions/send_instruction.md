# Personal AI · `send_instruction`

Send a chatgpt or search instruction to a Personal AI persona.

- **Service**: `personal_ai`
- **Action**: `send_instruction`
- **Action id**: `personal_ai.send_instruction`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "personal_ai" --action "send_instruction"
```

## Run

```bash
oo connector run "personal_ai" --action "send_instruction" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Personal AI state. Confirm the exact payload and intended effect with the user before running.
