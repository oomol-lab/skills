# ClassMarker · `list_recent_group_results`

List recent ClassMarker results across all groups the current API key can access.

- **Service**: `classmarker`
- **Action**: `list_recent_group_results`
- **Action id**: `classmarker.list_recent_group_results`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "classmarker" --action "list_recent_group_results"
```

## Run

```bash
oo connector run "classmarker" --action "list_recent_group_results" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
