# Wit.ai · `list_utterances`

List validated utterances already stored in the current Wit.ai app.

- **Service**: `wit_ai`
- **Action**: `list_utterances`
- **Action id**: `wit_ai.list_utterances`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "wit_ai" --action "list_utterances"
```

## Run

```bash
oo connector run "wit_ai" --action "list_utterances" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
