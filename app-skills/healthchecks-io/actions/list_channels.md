# Healthchecks.io · `list_channels`

List notification integrations in the current Healthchecks.io project.

- **Service**: `healthchecks_io`
- **Action**: `list_channels`
- **Action id**: `healthchecks_io.list_channels`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "healthchecks_io" --action "list_channels"
```

## Run

```bash
oo connector run "healthchecks_io" --action "list_channels" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
