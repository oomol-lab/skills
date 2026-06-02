# GitHub · `get_pull_request`

Get a GitHub pull request by number.

- **Service**: `github`
- **Action**: `get_pull_request`
- **Action id**: `github.get_pull_request`
- **Required scopes**: github.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "get_pull_request"
```

## Run

```bash
oo connector run "github" --action "get_pull_request" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
