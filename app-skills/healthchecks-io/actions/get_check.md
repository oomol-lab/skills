# Healthchecks.io · `get_check`

Get a Healthchecks.io check by UUID or unique key.

- **Service**: `healthchecks_io`
- **Action**: `get_check`
- **Action id**: `healthchecks_io.get_check`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "healthchecks_io" --action "get_check"
```

## Run

```bash
oo connector run "healthchecks_io" --action "get_check" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
