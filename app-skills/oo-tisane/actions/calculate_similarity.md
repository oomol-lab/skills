# Tisane · `calculate_similarity`

Calculate the semantic similarity between two text fragments, either in one language or across languages.

- **Service**: `tisane`
- **Action**: `calculate_similarity`
- **Action id**: `tisane.calculate_similarity`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tisane" --action "calculate_similarity"
```

## Run

```bash
oo connector run "tisane" --action "calculate_similarity" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
