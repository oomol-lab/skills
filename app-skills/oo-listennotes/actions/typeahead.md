# Listen Notes · `typeahead`

Get Listen Notes typeahead suggestions for terms, genres, and podcasts.

- **Service**: `listennotes`
- **Action**: `typeahead`
- **Action id**: `listennotes.typeahead`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "listennotes" --action "typeahead"
```

## Run

```bash
oo connector run "listennotes" --action "typeahead" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
