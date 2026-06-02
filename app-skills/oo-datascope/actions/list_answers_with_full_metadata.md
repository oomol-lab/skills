# DataScope · `list_answers_with_full_metadata`

List DataScope answers from the metadata-rich answers endpoint and normalize each question item into a stable questions array.

- **Service**: `datascope`
- **Action**: `list_answers_with_full_metadata`
- **Action id**: `datascope.list_answers_with_full_metadata`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "datascope" --action "list_answers_with_full_metadata"
```

## Run

```bash
oo connector run "datascope" --action "list_answers_with_full_metadata" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
