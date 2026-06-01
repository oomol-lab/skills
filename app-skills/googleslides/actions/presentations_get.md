# Google Slides · `presentations_get`

Retrieve a Google Slides presentation by presentation ID, or search Google Drive by exact presentation title first and then fetch the presentation.

- **Service**: `googleslides`
- **Action**: `presentations_get`
- **Action id**: `googleslides.presentations_get`
- **Required scopes**: googleslides.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googleslides" --action "presentations_get"
```

## Run

```bash
oo connector run "googleslides" --action "presentations_get" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
