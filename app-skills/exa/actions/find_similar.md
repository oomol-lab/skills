# Exa · `find_similar`

Find pages similar to a given URL and optionally enrich them with contents.

- **Service**: `exa`
- **Action**: `find_similar`
- **Action id**: `exa.find_similar`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "exa" --action "find_similar"
```

## Run

```bash
oo connector run "exa" --action "find_similar" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
