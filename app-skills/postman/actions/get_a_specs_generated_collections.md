# Postman · `get_a_specs_generated_collections`

Tool to retrieve all collections generated from an API specification in Postman. Use when you need to fetch collections that have been auto-generated from a spec. Returns metadata and an array of generated collections.

- **Service**: `postman`
- **Action**: `get_a_specs_generated_collections`
- **Action id**: `postman.get_a_specs_generated_collections`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_a_specs_generated_collections"
```

## Run

```bash
oo connector run "postman" --action "get_a_specs_generated_collections" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
