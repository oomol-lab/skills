# Zenserp · `google_image_search`

Run a Google Image Search request through Zenserp.

- **Service**: `zenserp`
- **Action**: `google_image_search`
- **Action id**: `zenserp.google_image_search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zenserp" --action "google_image_search"
```

## Run

```bash
oo connector run "zenserp" --action "google_image_search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
