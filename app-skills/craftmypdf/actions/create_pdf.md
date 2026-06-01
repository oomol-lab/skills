# CraftMyPDF · `create_pdf`

Generate a PDF from a CraftMyPDF template and return the hosted file URL plus transaction metadata.

- **Service**: `craftmypdf`
- **Action**: `create_pdf`
- **Action id**: `craftmypdf.create_pdf`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "craftmypdf" --action "create_pdf"
```

## Run

```bash
oo connector run "craftmypdf" --action "create_pdf" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes CraftMyPDF state. Confirm the exact payload and intended effect with the user before running.
