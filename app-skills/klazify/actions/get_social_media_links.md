# Klazify · `get_social_media_links`

Return the social media profile URLs for one website URL with Klazify.

- **Service**: `klazify`
- **Action**: `get_social_media_links`
- **Action id**: `klazify.get_social_media_links`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "klazify" --action "get_social_media_links"
```

## Run

```bash
oo connector run "klazify" --action "get_social_media_links" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
