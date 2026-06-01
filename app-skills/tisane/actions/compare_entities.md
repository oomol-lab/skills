# Tisane · `compare_entities`

Compare two compound person entities with Tisane and return whether they are the same or different.

- **Service**: `tisane`
- **Action**: `compare_entities`
- **Action id**: `tisane.compare_entities`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tisane" --action "compare_entities"
```

## Run

```bash
oo connector run "tisane" --action "compare_entities" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
