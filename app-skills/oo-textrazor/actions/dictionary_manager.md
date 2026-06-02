# TextRazor · `dictionary_manager`

Manage TextRazor custom entity dictionaries, including lifecycle and entry operations.

- **Service**: `textrazor`
- **Action**: `dictionary_manager`
- **Action id**: `textrazor.dictionary_manager`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "textrazor" --action "dictionary_manager"
```

## Run

```bash
oo connector run "textrazor" --action "dictionary_manager" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
