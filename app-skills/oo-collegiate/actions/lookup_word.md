# Merriam-Webster Collegiate · `lookup_word`

Look up a word in the Merriam-Webster Collegiate Dictionary and return matching entries or spelling suggestions.

- **Service**: `collegiate`
- **Action**: `lookup_word`
- **Action id**: `collegiate.lookup_word`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "collegiate" --action "lookup_word"
```

## Run

```bash
oo connector run "collegiate" --action "lookup_word" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
