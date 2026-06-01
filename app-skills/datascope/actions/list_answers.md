# DataScope · `list_answers`

List DataScope answers from the v2 answers endpoint with stable top-level metadata and dynamic answer values grouped under answers.

- **Service**: `datascope`
- **Action**: `list_answers`
- **Action id**: `datascope.list_answers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "datascope" --action "list_answers"
```

## Run

```bash
oo connector run "datascope" --action "list_answers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
