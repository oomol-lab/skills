# Tisane · `list_supported_languages`

List the languages currently supported by Tisane.

- **Service**: `tisane`
- **Action**: `list_supported_languages`
- **Action id**: `tisane.list_supported_languages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tisane" --action "list_supported_languages"
```

## Run

```bash
oo connector run "tisane" --action "list_supported_languages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
