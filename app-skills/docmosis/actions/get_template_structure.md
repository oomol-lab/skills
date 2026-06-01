# Docmosis · `get_template_structure`

Get the Docmosis template structure tree that describes fields, repeats, conditions, and other data references.

- **Service**: `docmosis`
- **Action**: `get_template_structure`
- **Action id**: `docmosis.get_template_structure`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docmosis" --action "get_template_structure"
```

## Run

```bash
oo connector run "docmosis" --action "get_template_structure" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
