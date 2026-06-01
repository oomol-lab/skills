# lexoffice · `get_article`

Retrieve one Lexoffice article by ID.

- **Service**: `lexoffice`
- **Action**: `get_article`
- **Action id**: `lexoffice.get_article`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "lexoffice" --action "get_article"
```

## Run

```bash
oo connector run "lexoffice" --action "get_article" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
