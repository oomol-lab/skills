# Formsite · `list_webhooks`

List all webhooks configured for one Formsite form.

- **Service**: `formsite`
- **Action**: `list_webhooks`
- **Action id**: `formsite.list_webhooks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "formsite" --action "list_webhooks"
```

## Run

```bash
oo connector run "formsite" --action "list_webhooks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
