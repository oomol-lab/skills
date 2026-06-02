# Basin · `list_form_webhooks`

List Basin form webhooks with optional filters.

- **Service**: `basin`
- **Action**: `list_form_webhooks`
- **Action id**: `basin.list_form_webhooks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "basin" --action "list_form_webhooks"
```

## Run

```bash
oo connector run "basin" --action "list_form_webhooks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
