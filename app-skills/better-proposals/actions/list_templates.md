# Better Proposals · `list_templates`

List Better Proposals templates with optional pagination.

- **Service**: `better_proposals`
- **Action**: `list_templates`
- **Action id**: `better_proposals.list_templates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "better_proposals" --action "list_templates"
```

## Run

```bash
oo connector run "better_proposals" --action "list_templates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
