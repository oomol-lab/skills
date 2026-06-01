# Placid · `list_templates`

List Placid templates for the connected project with optional collection, title, tag, ordering, or next-page URL filters.

- **Service**: `placid`
- **Action**: `list_templates`
- **Action id**: `placid.list_templates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "placid" --action "list_templates"
```

## Run

```bash
oo connector run "placid" --action "list_templates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
