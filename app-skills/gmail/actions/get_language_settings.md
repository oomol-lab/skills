# Gmail · `get_language_settings`

Get the Gmail display language settings for the connected account.

- **Service**: `gmail`
- **Action**: `get_language_settings`
- **Action id**: `gmail.get_language_settings`
- **Required scopes**: gmail.settings

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "get_language_settings"
```

## Run

```bash
oo connector run "gmail" --action "get_language_settings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
