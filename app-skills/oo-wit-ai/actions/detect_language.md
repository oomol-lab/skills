# Wit.ai · `detect_language`

Detect the most likely locales for a text message using Wit.ai language identification.

- **Service**: `wit_ai`
- **Action**: `detect_language`
- **Action id**: `wit_ai.detect_language`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "wit_ai" --action "detect_language"
```

## Run

```bash
oo connector run "wit_ai" --action "detect_language" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
