# DocsAutomator · `create_document_async`

Queue one DocsAutomator document generation job and return the job handle for later polling.

- **Service**: `docsautomator`
- **Action**: `create_document_async`
- **Action id**: `docsautomator.create_document_async`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docsautomator" --action "create_document_async"
```

## Run

```bash
oo connector run "docsautomator" --action "create_document_async" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes DocsAutomator state. Confirm the exact payload and intended effect with the user before running.
