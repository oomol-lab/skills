# Postmark · `get_template`

Get one Postmark template by template ID or alias.

- **Service**: `postmark`
- **Action**: `get_template`
- **Action id**: `postmark.get_template`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postmark" --action "get_template"
```

## Run

```bash
oo connector run "postmark" --action "get_template" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
