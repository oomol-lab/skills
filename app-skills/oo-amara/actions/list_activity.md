# Amara · `list_activity`

List Amara activity items with optional team, video, language, and date filters.

- **Service**: `amara`
- **Action**: `list_activity`
- **Action id**: `amara.list_activity`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amara" --action "list_activity"
```

## Run

```bash
oo connector run "amara" --action "list_activity" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
