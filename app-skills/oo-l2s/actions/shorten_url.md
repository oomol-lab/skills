# L2S · `shorten_url`

Create a shortened URL in L2S with optional custom key, UTM tags, and title.

- **Service**: `l2s`
- **Action**: `shorten_url`
- **Action id**: `l2s.shorten_url`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "l2s" --action "shorten_url"
```

## Run

```bash
oo connector run "l2s" --action "shorten_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
