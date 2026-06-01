# Docparser · `get_parser_models`

List all model layouts for a specific Docparser parser.

- **Service**: `docparser`
- **Action**: `get_parser_models`
- **Action id**: `docparser.get_parser_models`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docparser" --action "get_parser_models"
```

## Run

```bash
oo connector run "docparser" --action "get_parser_models" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
