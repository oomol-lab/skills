# OpenAlex · `get_entity`

Get one OpenAlex entity by identifier from a supported collection.

- **Service**: `openalex`
- **Action**: `get_entity`
- **Action id**: `openalex.get_entity`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openalex" --action "get_entity"
```

## Run

```bash
oo connector run "openalex" --action "get_entity" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
