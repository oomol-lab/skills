# DocsAutomator · `get_document_job`

Get the current status of a DocsAutomator async document generation job and return the finished document result when available.

- **Service**: `docsautomator`
- **Action**: `get_document_job`
- **Action id**: `docsautomator.get_document_job`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docsautomator" --action "get_document_job"
```

## Run

```bash
oo connector run "docsautomator" --action "get_document_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
