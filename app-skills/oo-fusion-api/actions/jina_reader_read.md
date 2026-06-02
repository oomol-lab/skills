# Oomol Fusion API · `jina_reader_read`

Read and extract URL content

- **Service**: `fusion-api`
- **Action**: `jina_reader_read`
- **Action id**: `fusion-api.jina_reader_read`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "jina_reader_read"
```

## Run

```bash
oo connector run "fusion-api" --action "jina_reader_read" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
