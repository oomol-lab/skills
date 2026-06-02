# GitHub · `merge_branch`

Merge one branch into another in a GitHub repository.

- **Service**: `github`
- **Action**: `merge_branch`
- **Action id**: `github.merge_branch`
- **Required scopes**: github.repo.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "merge_branch"
```

## Run

```bash
oo connector run "github" --action "merge_branch" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes GitHub state. Confirm the exact payload and intended effect with the user before running.
