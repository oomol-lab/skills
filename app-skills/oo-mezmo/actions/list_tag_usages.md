# Mezmo · `list_tag_usages`

List Mezmo usage entries grouped by tag for a required time window and optional result limit.

- **Service**: `mezmo`
- **Action**: `list_tag_usages`
- **Action id**: `mezmo.list_tag_usages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mezmo" --action "list_tag_usages"
```

## Run

```bash
oo connector run "mezmo" --action "list_tag_usages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
