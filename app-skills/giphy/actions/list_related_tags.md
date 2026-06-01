# GIPHY · `list_related_tags`

List GIPHY tags related to a term.

- **Service**: `giphy`
- **Action**: `list_related_tags`
- **Action id**: `giphy.list_related_tags`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "giphy" --action "list_related_tags"
```

## Run

```bash
oo connector run "giphy" --action "list_related_tags" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
