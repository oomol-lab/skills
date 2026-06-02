# SignWell · `create_document_from_template`

Create a SignWell document from one or more existing templates with recipients and optional prefilled template field values.

- **Service**: `signwell`
- **Action**: `create_document_from_template`
- **Action id**: `signwell.create_document_from_template`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "signwell" --action "create_document_from_template"
```

## Run

```bash
oo connector run "signwell" --action "create_document_from_template" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes SignWell state. Confirm the exact payload and intended effect with the user before running.
