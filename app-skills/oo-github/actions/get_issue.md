# GitHub · `get_issue`

Get a GitHub issue by number.

- **Service**: `github`
- **Action**: `get_issue`
- **Action id**: `github.get_issue`
- **Required scopes**: github.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "get_issue"
```

## Run

```bash
oo connector run "github" --action "get_issue" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
