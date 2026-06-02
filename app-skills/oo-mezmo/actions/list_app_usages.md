# Mezmo · `list_app_usages`

List Mezmo usage entries grouped by app for a required time window and optional result limit.

- **Service**: `mezmo`
- **Action**: `list_app_usages`
- **Action id**: `mezmo.list_app_usages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mezmo" --action "list_app_usages"
```

## Run

```bash
oo connector run "mezmo" --action "list_app_usages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
