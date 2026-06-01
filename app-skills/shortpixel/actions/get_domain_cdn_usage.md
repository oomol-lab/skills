# ShortPixel · `get_domain_cdn_usage`

Read CDN usage and quota details for one ShortPixel-associated domain.

- **Service**: `shortpixel`
- **Action**: `get_domain_cdn_usage`
- **Action id**: `shortpixel.get_domain_cdn_usage`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shortpixel" --action "get_domain_cdn_usage"
```

## Run

```bash
oo connector run "shortpixel" --action "get_domain_cdn_usage" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
