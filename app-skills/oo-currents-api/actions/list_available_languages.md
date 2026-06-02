# Currents API · `list_available_languages`

List the language codes currently supported by Currents.

- **Service**: `currents_api`
- **Action**: `list_available_languages`
- **Action id**: `currents_api.list_available_languages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "currents_api" --action "list_available_languages"
```

## Run

```bash
oo connector run "currents_api" --action "list_available_languages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
