# Linear · `list_linear_cycles`

Lists the Linear periods accessible by the current credential.

- **Service**: `linear`
- **Action**: `list_linear_cycles`
- **Action id**: `linear.list_linear_cycles`
- **Required scopes**: linear.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linear" --action "list_linear_cycles"
```

## Run

```bash
oo connector run "linear" --action "list_linear_cycles" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
