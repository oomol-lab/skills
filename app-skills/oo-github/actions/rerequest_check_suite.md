# GitHub · `rerequest_check_suite`

Re-request a GitHub check suite.

- **Service**: `github`
- **Action**: `rerequest_check_suite`
- **Action id**: `github.rerequest_check_suite`
- **Required scopes**: github.workflow.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "rerequest_check_suite"
```

## Run

```bash
oo connector run "github" --action "rerequest_check_suite" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
