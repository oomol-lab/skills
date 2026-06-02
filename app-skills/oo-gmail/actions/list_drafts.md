# Gmail · `list_drafts`

List Gmail drafts with pagination, and optionally hydrate each draft into full message details when `verbose` is true.

- **Service**: `gmail`
- **Action**: `list_drafts`
- **Action id**: `gmail.list_drafts`
- **Required scopes**: gmail.compose

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "list_drafts"
```

## Run

```bash
oo connector run "gmail" --action "list_drafts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
