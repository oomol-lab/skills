# DeepL · `translate_text`

Translate one or more text items with DeepL and return the normalized translation results.

- **Service**: `deepl`
- **Action**: `translate_text`
- **Action id**: `deepl.translate_text`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "deepl" --action "translate_text"
```

## Run

```bash
oo connector run "deepl" --action "translate_text" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
