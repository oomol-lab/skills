# Gmail · `get_draft`

Get a Gmail draft by draft ID. Use the `format` parameter to control how much message detail is returned.

- **Service**: `gmail`
- **Action**: `get_draft`
- **Action id**: `gmail.get_draft`
- **Required scopes**: gmail.compose

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "get_draft"
```

## Run

```bash
oo connector run "gmail" --action "get_draft" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
