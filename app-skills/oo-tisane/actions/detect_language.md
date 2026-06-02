# Tisane · `detect_language`

Detect the language segments used in a text fragment with optional language hints and delimiter settings.

- **Service**: `tisane`
- **Action**: `detect_language`
- **Action id**: `tisane.detect_language`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tisane" --action "detect_language"
```

## Run

```bash
oo connector run "tisane" --action "detect_language" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
