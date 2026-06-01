# GTmetrix · `get_latest_page_report`

Get the latest GTmetrix report associated with a page.

- **Service**: `gtmetrix`
- **Action**: `get_latest_page_report`
- **Action id**: `gtmetrix.get_latest_page_report`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gtmetrix" --action "get_latest_page_report"
```

## Run

```bash
oo connector run "gtmetrix" --action "get_latest_page_report" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
