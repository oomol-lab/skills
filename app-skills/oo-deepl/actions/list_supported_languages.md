# DeepL · `list_supported_languages`

List the DeepL source or target languages currently supported by the translation API.

- **Service**: `deepl`
- **Action**: `list_supported_languages`
- **Action id**: `deepl.list_supported_languages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "deepl" --action "list_supported_languages"
```

## Run

```bash
oo connector run "deepl" --action "list_supported_languages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
