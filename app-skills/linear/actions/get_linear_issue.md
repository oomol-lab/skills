# Linear · `get_linear_issue`

Get details of a Linear issue, including comments, attachments, subscribers, and underlying relationship fields.

- **Service**: `linear`
- **Action**: `get_linear_issue`
- **Action id**: `linear.get_linear_issue`
- **Required scopes**: linear.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linear" --action "get_linear_issue"
```

## Run

```bash
oo connector run "linear" --action "get_linear_issue" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
