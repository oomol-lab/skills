# Healthchecks.io · `list_badges`

List badge metadata in the current Healthchecks.io project.

- **Service**: `healthchecks_io`
- **Action**: `list_badges`
- **Action id**: `healthchecks_io.list_badges`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "healthchecks_io" --action "list_badges"
```

## Run

```bash
oo connector run "healthchecks_io" --action "list_badges" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
