# Codacy · `list_languages`

List programming languages supported by Codacy analysis tools.

- **Service**: `codacy`
- **Action**: `list_languages`
- **Action id**: `codacy.list_languages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "codacy" --action "list_languages"
```

## Run

```bash
oo connector run "codacy" --action "list_languages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
