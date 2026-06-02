# Healthchecks.io · `list_checks`

List Healthchecks.io checks in the current project.

- **Service**: `healthchecks_io`
- **Action**: `list_checks`
- **Action id**: `healthchecks_io.list_checks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "healthchecks_io" --action "list_checks"
```

## Run

```bash
oo connector run "healthchecks_io" --action "list_checks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
