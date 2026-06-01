# LinkedIn · `create_article_post`

Create a LinkedIn article or link post with explicit source URL metadata using the Posts API.

- **Service**: `linkedin`
- **Action**: `create_article_post`
- **Action id**: `linkedin.create_article_post`
- **Required scopes**: linkedin.post.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linkedin" --action "create_article_post"
```

## Run

```bash
oo connector run "linkedin" --action "create_article_post" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes LinkedIn state. Confirm the exact payload and intended effect with the user before running.
