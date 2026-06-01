# APIVerve · `find_antonyms`

Find antonyms for a word using APIVerve Antonym Finder.

- **Service**: `apiverve`
- **Action**: `find_antonyms`
- **Action id**: `apiverve.find_antonyms`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apiverve" --action "find_antonyms"
```

## Run

```bash
oo connector run "apiverve" --action "find_antonyms" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
