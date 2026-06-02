# Healthchecks.io · `list_flips`

List Healthchecks.io status flips for a check by UUID or unique key.

- **Service**: `healthchecks_io`
- **Action**: `list_flips`
- **Action id**: `healthchecks_io.list_flips`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "healthchecks_io" --action "list_flips"
```

## Run

```bash
oo connector run "healthchecks_io" --action "list_flips" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
