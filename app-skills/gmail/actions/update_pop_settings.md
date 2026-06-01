# Gmail · `update_pop_settings`

Update the Gmail POP settings, including access window and disposition behavior.

- **Service**: `gmail`
- **Action**: `update_pop_settings`
- **Action id**: `gmail.update_pop_settings`
- **Required scopes**: gmail.settings

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "update_pop_settings"
```

## Run

```bash
oo connector run "gmail" --action "update_pop_settings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Gmail state. Confirm the exact payload and intended effect with the user before running.
