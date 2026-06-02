# OpenAlex · `get_work`

Get one OpenAlex work by identifier.

- **Service**: `openalex`
- **Action**: `get_work`
- **Action id**: `openalex.get_work`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openalex" --action "get_work"
```

## Run

```bash
oo connector run "openalex" --action "get_work" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
