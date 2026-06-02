# Mezmo · `list_host_usages`

List Mezmo usage entries grouped by host for a required time window and optional result limit.

- **Service**: `mezmo`
- **Action**: `list_host_usages`
- **Action id**: `mezmo.list_host_usages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mezmo" --action "list_host_usages"
```

## Run

```bash
oo connector run "mezmo" --action "list_host_usages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
