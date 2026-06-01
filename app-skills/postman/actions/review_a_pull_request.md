# Postman · `review_a_pull_request`

Tool to update the review status of a pull request by approving, declining, or unapproving it. Use when you need to perform a review action on a Postman pull request.

- **Service**: `postman`
- **Action**: `review_a_pull_request`
- **Action id**: `postman.review_a_pull_request`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "review_a_pull_request"
```

## Run

```bash
oo connector run "postman" --action "review_a_pull_request" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
