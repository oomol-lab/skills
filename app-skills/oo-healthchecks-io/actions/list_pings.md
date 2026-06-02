# Healthchecks.io · `list_pings`

List recent Healthchecks.io pings for a check by UUID.

- **Service**: `healthchecks_io`
- **Action**: `list_pings`
- **Action id**: `healthchecks_io.list_pings`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "healthchecks_io" --action "list_pings"
```

## Run

```bash
oo connector run "healthchecks_io" --action "list_pings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
