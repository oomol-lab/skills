# timelink · `get_company`

Fetch the current Timelink company details for the authenticated token.

- **Service**: `timelink`
- **Action**: `get_company`
- **Action id**: `timelink.get_company`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "timelink" --action "get_company"
```

## Run

```bash
oo connector run "timelink" --action "get_company" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
