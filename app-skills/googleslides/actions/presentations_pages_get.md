# Google Slides · `presentations_pages_get`

Retrieve a specific page from a Google Slides presentation, including its page elements and page-specific properties.

- **Service**: `googleslides`
- **Action**: `presentations_pages_get`
- **Action id**: `googleslides.presentations_pages_get`
- **Required scopes**: googleslides.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googleslides" --action "presentations_pages_get"
```

## Run

```bash
oo connector run "googleslides" --action "presentations_pages_get" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
