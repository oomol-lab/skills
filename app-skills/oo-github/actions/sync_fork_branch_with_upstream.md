# GitHub · `sync_fork_branch_with_upstream`

Sync a fork branch with its upstream branch.

- **Service**: `github`
- **Action**: `sync_fork_branch_with_upstream`
- **Action id**: `github.sync_fork_branch_with_upstream`
- **Required scopes**: github.repo.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "sync_fork_branch_with_upstream"
```

## Run

```bash
oo connector run "github" --action "sync_fork_branch_with_upstream" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes GitHub state. Confirm the exact payload and intended effect with the user before running.
