# GIPHY · `translate_gif`

Translate a phrase into a single best-match GIPHY GIF.

- **Service**: `giphy`
- **Action**: `translate_gif`
- **Action id**: `giphy.translate_gif`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "giphy" --action "translate_gif"
```

## Run

```bash
oo connector run "giphy" --action "translate_gif" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
