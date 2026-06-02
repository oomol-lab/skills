# Dev.to · `update_article`

Update an existing Dev.to article.

- **Service**: `devto`
- **Action**: `update_article`
- **Action id**: `devto.update_article`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "devto" --action "update_article"
```

## Run

```bash
oo connector run "devto" --action "update_article" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Dev.to state. Confirm the exact payload and intended effect with the user before running.
