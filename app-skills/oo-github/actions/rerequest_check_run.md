# GitHub · `rerequest_check_run`

Re-request a GitHub check run.

- **Service**: `github`
- **Action**: `rerequest_check_run`
- **Action id**: `github.rerequest_check_run`
- **Required scopes**: github.workflow.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "rerequest_check_run"
```

## Run

```bash
oo connector run "github" --action "rerequest_check_run" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
