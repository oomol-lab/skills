# Linguapop · `list_available_languages`

Fetch the available Linguapop placement test languages and their stable language codes.

- **Service**: `linguapop`
- **Action**: `list_available_languages`
- **Action id**: `linguapop.list_available_languages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linguapop" --action "list_available_languages"
```

## Run

```bash
oo connector run "linguapop" --action "list_available_languages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
