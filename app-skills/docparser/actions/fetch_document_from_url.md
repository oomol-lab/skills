# Docparser · `fetch_document_from_url`

Queue a publicly accessible document URL for import into a Docparser parser and return the scheduled document metadata.

- **Service**: `docparser`
- **Action**: `fetch_document_from_url`
- **Action id**: `docparser.fetch_document_from_url`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docparser" --action "fetch_document_from_url"
```

## Run

```bash
oo connector run "docparser" --action "fetch_document_from_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
