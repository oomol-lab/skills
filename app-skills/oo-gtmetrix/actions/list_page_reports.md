# GTmetrix · `list_page_reports`

List GTmetrix reports associated with a single page.

- **Service**: `gtmetrix`
- **Action**: `list_page_reports`
- **Action id**: `gtmetrix.list_page_reports`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gtmetrix" --action "list_page_reports"
```

## Run

```bash
oo connector run "gtmetrix" --action "list_page_reports" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
