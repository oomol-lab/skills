# Parsera · `list_llm_specs`

List the LLM specifications available to Parsera requests.

- **Service**: `parsera`
- **Action**: `list_llm_specs`
- **Action id**: `parsera.list_llm_specs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "parsera" --action "list_llm_specs"
```

## Run

```bash
oo connector run "parsera" --action "list_llm_specs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
