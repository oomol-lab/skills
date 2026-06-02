# Gmail · `settings_get_pop`

Get the Gmail POP settings, including access window and message disposition.

- **Service**: `gmail`
- **Action**: `settings_get_pop`
- **Action id**: `gmail.settings_get_pop`
- **Required scopes**: gmail.settings

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "settings_get_pop"
```

## Run

```bash
oo connector run "gmail" --action "settings_get_pop" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
