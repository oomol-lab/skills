# GitHub · `submit_pull_request_review`

Submit a pending GitHub pull request review.

- **Service**: `github`
- **Action**: `submit_pull_request_review`
- **Action id**: `github.submit_pull_request_review`
- **Required scopes**: github.review.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "submit_pull_request_review"
```

## Run

```bash
oo connector run "github" --action "submit_pull_request_review" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes GitHub state. Confirm the exact payload and intended effect with the user before running.
