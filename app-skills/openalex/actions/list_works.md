# OpenAlex · `list_works`

List, search, filter, page, or group OpenAlex works with work-focused normalized fields.

- **Service**: `openalex`
- **Action**: `list_works`
- **Action id**: `openalex.list_works`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openalex" --action "list_works"
```

## Run

```bash
oo connector run "openalex" --action "list_works" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
