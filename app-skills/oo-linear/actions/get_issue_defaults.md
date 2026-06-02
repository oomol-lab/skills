# Linear · `get_issue_defaults`

Gets the default status and default estimate used when the specified team creates an issue.

- **Service**: `linear`
- **Action**: `get_issue_defaults`
- **Action id**: `linear.get_issue_defaults`
- **Required scopes**: linear.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linear" --action "get_issue_defaults"
```

## Run

```bash
oo connector run "linear" --action "get_issue_defaults" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
