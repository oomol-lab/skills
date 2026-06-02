# Wit.ai · `analyze_message`

Analyze a text message and return the intents, entities, and traits inferred by Wit.ai.

- **Service**: `wit_ai`
- **Action**: `analyze_message`
- **Action id**: `wit_ai.analyze_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "wit_ai" --action "analyze_message"
```

## Run

```bash
oo connector run "wit_ai" --action "analyze_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
