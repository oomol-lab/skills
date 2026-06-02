# GitHub · `reply_pull_request_review_comment`

Reply to a top-level GitHub pull request review comment.

- **Service**: `github`
- **Action**: `reply_pull_request_review_comment`
- **Action id**: `github.reply_pull_request_review_comment`
- **Required scopes**: github.review.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "reply_pull_request_review_comment"
```

## Run

```bash
oo connector run "github" --action "reply_pull_request_review_comment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes GitHub state. Confirm the exact payload and intended effect with the user before running.
