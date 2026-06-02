# ClassMarker · `list_groups_links_and_tests`

List the ClassMarker groups, links, and assigned tests that the current API key can access.

- **Service**: `classmarker`
- **Action**: `list_groups_links_and_tests`
- **Action id**: `classmarker.list_groups_links_and_tests`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "classmarker" --action "list_groups_links_and_tests"
```

## Run

```bash
oo connector run "classmarker" --action "list_groups_links_and_tests" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
