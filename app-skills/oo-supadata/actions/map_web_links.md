# Supadata · `map_web_links`

Extract links found on a website.

- **Service**: `supadata`
- **Action**: `map_web_links`
- **Action id**: `supadata.map_web_links`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "supadata" --action "map_web_links"
```

## Run

```bash
oo connector run "supadata" --action "map_web_links" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
