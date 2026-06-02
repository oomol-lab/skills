# Webvizio · `delete_rest_hook_subscription`

Unsubscribe one Webvizio REST Hook event subscription by its Webvizio webhook ID.

- **Service**: `webvizio`
- **Action**: `delete_rest_hook_subscription`
- **Action id**: `webvizio.delete_rest_hook_subscription`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "webvizio" --action "delete_rest_hook_subscription"
```

## Run

```bash
oo connector run "webvizio" --action "delete_rest_hook_subscription" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Webvizio data. Always confirm the target and get explicit user approval before running.
