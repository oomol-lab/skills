# Foxit Cloud API · `check_pages_are_scanned`

Submit one PDF for scanned-page detection in Foxit.

- **Service**: `fuxin`
- **Action**: `check_pages_are_scanned`
- **Action id**: `fuxin.check_pages_are_scanned`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fuxin" --action "check_pages_are_scanned"
```

## Run

```bash
oo connector run "fuxin" --action "check_pages_are_scanned" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
