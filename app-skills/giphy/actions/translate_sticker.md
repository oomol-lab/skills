# GIPHY · `translate_sticker`

Translate a phrase into a single best-match GIPHY sticker.

- **Service**: `giphy`
- **Action**: `translate_sticker`
- **Action id**: `giphy.translate_sticker`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "giphy" --action "translate_sticker"
```

## Run

```bash
oo connector run "giphy" --action "translate_sticker" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
