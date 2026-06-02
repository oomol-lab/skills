# GitHub · `list_check_runs_for_ref`

List GitHub check runs for a commit SHA, branch, or tag.

- **Service**: `github`
- **Action**: `list_check_runs_for_ref`
- **Action id**: `github.list_check_runs_for_ref`
- **Required scopes**: github.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "list_check_runs_for_ref"
```

## Run

```bash
oo connector run "github" --action "list_check_runs_for_ref" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
