# Tisane · `analyze_text`

Analyze text with Tisane for problematic content, sentiment, entities, topics, and other linguistic features.

- **Service**: `tisane`
- **Action**: `analyze_text`
- **Action id**: `tisane.analyze_text`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tisane" --action "analyze_text"
```

## Run

```bash
oo connector run "tisane" --action "analyze_text" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
