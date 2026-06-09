# YouTube · `list_i18n_languages`

List YouTube interface languages.

- **Service**: `youtube`
- **Action**: `list_i18n_languages`
- **Action id**: `youtube.list_i18n_languages`
- **Required scopes**: youtube.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "youtube" --action "list_i18n_languages"
```

## Run

```bash
oo connector run "youtube" --action "list_i18n_languages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
