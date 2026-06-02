# OpenAlex · `autocomplete`

Return OpenAlex autocomplete suggestions for a search string.

- **Service**: `openalex`
- **Action**: `autocomplete`
- **Action id**: `openalex.autocomplete`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openalex" --action "autocomplete"
```

## Run

```bash
oo connector run "openalex" --action "autocomplete" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
