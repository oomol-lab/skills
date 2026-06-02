# Formsite · `delete_webhook`

Delete one Formsite webhook from a form by its destination URL.

- **Service**: `formsite`
- **Action**: `delete_webhook`
- **Action id**: `formsite.delete_webhook`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "formsite" --action "delete_webhook"
```

## Run

```bash
oo connector run "formsite" --action "delete_webhook" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Formsite data. Always confirm the target and get explicit user approval before running.
