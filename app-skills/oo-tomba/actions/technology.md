# Tomba · `technology`

Detect technologies and tools used by a company domain.

- **Service**: `tomba`
- **Action**: `technology`
- **Action id**: `tomba.technology`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tomba" --action "technology"
```

## Run

```bash
oo connector run "tomba" --action "technology" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
