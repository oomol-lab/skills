# Pdfless · `get_workspace`

Get the current Pdfless workspace details resolved by the provided API key.

- **Service**: `pdfless`
- **Action**: `get_workspace`
- **Action id**: `pdfless.get_workspace`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pdfless" --action "get_workspace"
```

## Run

```bash
oo connector run "pdfless" --action "get_workspace" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
