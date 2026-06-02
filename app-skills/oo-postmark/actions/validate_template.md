# Postmark · `validate_template`

Validate Postmark template content against the official template renderer.

- **Service**: `postmark`
- **Action**: `validate_template`
- **Action id**: `postmark.validate_template`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postmark" --action "validate_template"
```

## Run

```bash
oo connector run "postmark" --action "validate_template" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
