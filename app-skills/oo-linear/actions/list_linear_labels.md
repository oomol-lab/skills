# Linear · `list_linear_labels`

Lists Linear labels for a specified team or entire workspace.

- **Service**: `linear`
- **Action**: `list_linear_labels`
- **Action id**: `linear.list_linear_labels`
- **Required scopes**: linear.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linear" --action "list_linear_labels"
```

## Run

```bash
oo connector run "linear" --action "list_linear_labels" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
