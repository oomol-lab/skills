# SignWell · `get_template`

Get a SignWell template and all associated template data by template ID.

- **Service**: `signwell`
- **Action**: `get_template`
- **Action id**: `signwell.get_template`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "signwell" --action "get_template"
```

## Run

```bash
oo connector run "signwell" --action "get_template" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
