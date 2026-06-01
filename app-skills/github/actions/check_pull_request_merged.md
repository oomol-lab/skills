# GitHub · `check_pull_request_merged`

Check whether a GitHub pull request has been merged.

- **Service**: `github`
- **Action**: `check_pull_request_merged`
- **Action id**: `github.check_pull_request_merged`
- **Required scopes**: github.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "check_pull_request_merged"
```

## Run

```bash
oo connector run "github" --action "check_pull_request_merged" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
