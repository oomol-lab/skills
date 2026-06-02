# LinkedIn · `create_text_post`

Create a text-only organic LinkedIn post for a member author.

- **Service**: `linkedin`
- **Action**: `create_text_post`
- **Action id**: `linkedin.create_text_post`
- **Required scopes**: linkedin.post.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linkedin" --action "create_text_post"
```

## Run

```bash
oo connector run "linkedin" --action "create_text_post" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes LinkedIn state. Confirm the exact payload and intended effect with the user before running.
