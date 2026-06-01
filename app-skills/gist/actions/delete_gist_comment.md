# Gist · `delete_gist_comment`

Delete a GitHub gist comment.

- **Service**: `gist`
- **Action**: `delete_gist_comment`
- **Action id**: `gist.delete_gist_comment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gist" --action "delete_gist_comment"
```

## Run

```bash
oo connector run "gist" --action "delete_gist_comment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Gist data. Always confirm the target and get explicit user approval before running.
