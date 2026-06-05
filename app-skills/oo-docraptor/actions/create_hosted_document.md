# DocRaptor · `create_hosted_document`

Create a hosted PDF or Excel document with DocRaptor from raw HTML or a public URL and return its download URL.

- **Service**: `docraptor`
- **Action**: `create_hosted_document`
- **Action id**: `docraptor.create_hosted_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docraptor" --action "create_hosted_document"
```

## Run

```bash
oo connector run "docraptor" --action "create_hosted_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes DocRaptor state. Confirm the exact payload and intended effect with the user before running.
