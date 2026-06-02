# Better Stack · `list_metadata`

List Better Stack metadata records for incidents or other supported owner types.

- **Service**: `better_stack`
- **Action**: `list_metadata`
- **Action id**: `better_stack.list_metadata`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "better_stack" --action "list_metadata"
```

## Run

```bash
oo connector run "better_stack" --action "list_metadata" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
