# Klazify · `get_similar_domains`

Return similar or competitor domains for one website URL with Klazify.

- **Service**: `klazify`
- **Action**: `get_similar_domains`
- **Action id**: `klazify.get_similar_domains`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "klazify" --action "get_similar_domains"
```

## Run

```bash
oo connector run "klazify" --action "get_similar_domains" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
