# Google Slides · `get_page_thumbnail2`

Generate a thumbnail for a Google Slides page. Returns a temporary content URL plus thumbnail dimensions when Google provides them.

- **Service**: `googleslides`
- **Action**: `get_page_thumbnail2`
- **Action id**: `googleslides.get_page_thumbnail2`
- **Required scopes**: googleslides.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googleslides" --action "get_page_thumbnail2"
```

## Run

```bash
oo connector run "googleslides" --action "get_page_thumbnail2" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
