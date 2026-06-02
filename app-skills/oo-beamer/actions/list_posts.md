# Beamer · `list_posts`

List existing Beamer posts with optional changelog, audience, and analytics filters.

- **Service**: `beamer`
- **Action**: `list_posts`
- **Action id**: `beamer.list_posts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "beamer" --action "list_posts"
```

## Run

```bash
oo connector run "beamer" --action "list_posts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
