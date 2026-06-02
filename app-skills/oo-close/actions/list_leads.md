# Close · `list_leads`

List Close leads with optional pagination and field selection.

- **Service**: `close`
- **Action**: `list_leads`
- **Action id**: `close.list_leads`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "close" --action "list_leads"
```

## Run

```bash
oo connector run "close" --action "list_leads" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
