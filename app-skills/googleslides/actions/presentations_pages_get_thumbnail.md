# Google Slides · `presentations_pages_get_thumbnail`

Compatibility alias for get_page_thumbnail2. Generates a thumbnail for a Google Slides page.

- **Service**: `googleslides`
- **Action**: `presentations_pages_get_thumbnail`
- **Action id**: `googleslides.presentations_pages_get_thumbnail`
- **Required scopes**: googleslides.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googleslides" --action "presentations_pages_get_thumbnail"
```

## Run

```bash
oo connector run "googleslides" --action "presentations_pages_get_thumbnail" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
