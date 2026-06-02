# U301 · `shorten_link`

Create one U301 short link for a destination URL.

- **Service**: `u301`
- **Action**: `shorten_link`
- **Action id**: `u301.shorten_link`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "u301" --action "shorten_link"
```

## Run

```bash
oo connector run "u301" --action "shorten_link" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
