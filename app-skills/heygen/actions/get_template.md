# HeyGen · `get_template`

Retrieve variable definitions and metadata for a single HeyGen template.

- **Service**: `heygen`
- **Action**: `get_template`
- **Action id**: `heygen.get_template`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "heygen" --action "get_template"
```

## Run

```bash
oo connector run "heygen" --action "get_template" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
