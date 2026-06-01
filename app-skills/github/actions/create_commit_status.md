# GitHub · `create_commit_status`

Create a commit status for a GitHub commit SHA.

- **Service**: `github`
- **Action**: `create_commit_status`
- **Action id**: `github.create_commit_status`
- **Required scopes**: github.status.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "create_commit_status"
```

## Run

```bash
oo connector run "github" --action "create_commit_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes GitHub state. Confirm the exact payload and intended effect with the user before running.
