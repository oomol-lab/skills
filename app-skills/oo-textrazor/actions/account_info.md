# TextRazor · `account_info`

Retrieve the current TextRazor account plan and request quota summary.

- **Service**: `textrazor`
- **Action**: `account_info`
- **Action id**: `textrazor.account_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "textrazor" --action "account_info"
```

## Run

```bash
oo connector run "textrazor" --action "account_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
