# Diffbot · `extract_article`

Extract one public article URL with Diffbot and return a normalized article.

- **Service**: `diffbot`
- **Action**: `extract_article`
- **Action id**: `diffbot.extract_article`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "diffbot" --action "extract_article"
```

## Run

```bash
oo connector run "diffbot" --action "extract_article" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
