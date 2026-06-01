# ClassMarker · `list_recent_results_for_link_test`

List recent ClassMarker results for one specific link and assigned test pair.

- **Service**: `classmarker`
- **Action**: `list_recent_results_for_link_test`
- **Action id**: `classmarker.list_recent_results_for_link_test`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "classmarker" --action "list_recent_results_for_link_test"
```

## Run

```bash
oo connector run "classmarker" --action "list_recent_results_for_link_test" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
