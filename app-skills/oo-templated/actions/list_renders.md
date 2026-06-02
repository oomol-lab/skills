# Templated · `list_renders`

List all renders owned by the current Templated account.

- **Service**: `templated`
- **Action**: `list_renders`
- **Action id**: `templated.list_renders`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "templated" --action "list_renders"
```

## Run

```bash
oo connector run "templated" --action "list_renders" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
