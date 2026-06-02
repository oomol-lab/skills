# GitHub · `search_issues_and_pull_requests`

Search GitHub issues and pull requests with raw GitHub search syntax or structured filters close to Composio pull-request search.

- **Service**: `github`
- **Action**: `search_issues_and_pull_requests`
- **Action id**: `github.search_issues_and_pull_requests`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "search_issues_and_pull_requests"
```

## Run

```bash
oo connector run "github" --action "search_issues_and_pull_requests" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
