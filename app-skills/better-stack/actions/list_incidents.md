# Better Stack · `list_incidents`

List Better Stack incidents with optional date and status filters.

- **Service**: `better_stack`
- **Action**: `list_incidents`
- **Action id**: `better_stack.list_incidents`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "better_stack" --action "list_incidents"
```

## Run

```bash
oo connector run "better_stack" --action "list_incidents" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
