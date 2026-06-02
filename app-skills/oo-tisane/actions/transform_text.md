# Tisane · `transform_text`

Translate text between languages with Tisane, or paraphrase text when source and target languages match.

- **Service**: `tisane`
- **Action**: `transform_text`
- **Action id**: `tisane.transform_text`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tisane" --action "transform_text"
```

## Run

```bash
oo connector run "tisane" --action "transform_text" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
