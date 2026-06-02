# Listen Notes · `get_languages`

Get the supported Listen Notes podcast languages.

- **Service**: `listennotes`
- **Action**: `get_languages`
- **Action id**: `listennotes.get_languages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "listennotes" --action "get_languages"
```

## Run

```bash
oo connector run "listennotes" --action "get_languages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
