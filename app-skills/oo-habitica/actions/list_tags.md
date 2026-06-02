# Habitica · `list_tags`

List the authenticated Habitica user's tags.

- **Service**: `habitica`
- **Action**: `list_tags`
- **Action id**: `habitica.list_tags`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "habitica" --action "list_tags"
```

## Run

```bash
oo connector run "habitica" --action "list_tags" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
