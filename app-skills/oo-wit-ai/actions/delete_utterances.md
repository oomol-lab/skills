# Wit.ai · `delete_utterances`

Asynchronously delete validated utterances from the current Wit.ai app.

- **Service**: `wit_ai`
- **Action**: `delete_utterances`
- **Action id**: `wit_ai.delete_utterances`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "wit_ai" --action "delete_utterances"
```

## Run

```bash
oo connector run "wit_ai" --action "delete_utterances" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Wit.ai data. Always confirm the target and get explicit user approval before running.
