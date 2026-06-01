# Humanitix · `list_tags`

List tags associated with the connected Humanitix account.

- **Service**: `humanitix`
- **Action**: `list_tags`
- **Action id**: `humanitix.list_tags`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "humanitix" --action "list_tags"
```

## Run

```bash
oo connector run "humanitix" --action "list_tags" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
