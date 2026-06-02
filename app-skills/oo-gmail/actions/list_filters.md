# Gmail · `list_filters`

List Gmail filters for the mailbox. Use this to audit existing rules or avoid creating duplicates.

- **Service**: `gmail`
- **Action**: `list_filters`
- **Action id**: `gmail.list_filters`
- **Required scopes**: gmail.settings

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "list_filters"
```

## Run

```bash
oo connector run "gmail" --action "list_filters" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
