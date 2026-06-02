# Gitea · `get_issue`

Get a Gitea issue by repository and issue number.

- **Service**: `gitea`
- **Action**: `get_issue`
- **Action id**: `gitea.get_issue`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gitea" --action "get_issue"
```

## Run

```bash
oo connector run "gitea" --action "get_issue" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
