# Docparser · `list_parsers`

List all Document Parsers linked to the current Docparser account.

- **Service**: `docparser`
- **Action**: `list_parsers`
- **Action id**: `docparser.list_parsers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docparser" --action "list_parsers"
```

## Run

```bash
oo connector run "docparser" --action "list_parsers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
