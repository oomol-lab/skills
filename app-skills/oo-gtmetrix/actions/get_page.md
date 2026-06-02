# GTmetrix · `get_page`

Get a single GTmetrix page by slug.

- **Service**: `gtmetrix`
- **Action**: `get_page`
- **Action id**: `gtmetrix.get_page`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gtmetrix" --action "get_page"
```

## Run

```bash
oo connector run "gtmetrix" --action "get_page" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
