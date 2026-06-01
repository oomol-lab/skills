# Cuttly · `shorten_url`

Create a short URL with the Cuttly Regular API.

- **Service**: `cutt_ly`
- **Action**: `shorten_url`
- **Action id**: `cutt_ly.shorten_url`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cutt_ly" --action "shorten_url"
```

## Run

```bash
oo connector run "cutt_ly" --action "shorten_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
