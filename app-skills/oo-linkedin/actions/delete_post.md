# LinkedIn · `delete_post`

Delete a LinkedIn post by raw post URN using the Posts API.

- **Service**: `linkedin`
- **Action**: `delete_post`
- **Action id**: `linkedin.delete_post`
- **Required scopes**: linkedin.post.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linkedin" --action "delete_post"
```

## Run

```bash
oo connector run "linkedin" --action "delete_post" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites LinkedIn data. Always confirm the target and get explicit user approval before running.
