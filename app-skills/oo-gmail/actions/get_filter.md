# Gmail · `get_filter`

Get a Gmail filter by filter ID so you can inspect its criteria and actions.

- **Service**: `gmail`
- **Action**: `get_filter`
- **Action id**: `gmail.get_filter`
- **Required scopes**: gmail.settings

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "get_filter"
```

## Run

```bash
oo connector run "gmail" --action "get_filter" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
