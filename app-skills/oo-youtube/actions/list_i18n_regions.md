# YouTube · `list_i18n_regions`

List YouTube content regions.

- **Service**: `youtube`
- **Action**: `list_i18n_regions`
- **Action id**: `youtube.list_i18n_regions`
- **Required scopes**: youtube.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "youtube" --action "list_i18n_regions"
```

## Run

```bash
oo connector run "youtube" --action "list_i18n_regions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
