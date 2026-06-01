# OpenAlex · `list_entities`

List, search, filter, page, or group OpenAlex entities from the supported collections.

- **Service**: `openalex`
- **Action**: `list_entities`
- **Action id**: `openalex.list_entities`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openalex" --action "list_entities"
```

## Run

```bash
oo connector run "openalex" --action "list_entities" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
