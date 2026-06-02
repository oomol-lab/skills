# ShortPixel · `purge_domain_cache`

Purge the ShortPixel CDN cache for one associated domain.

- **Service**: `shortpixel`
- **Action**: `purge_domain_cache`
- **Action id**: `shortpixel.purge_domain_cache`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shortpixel" --action "purge_domain_cache"
```

## Run

```bash
oo connector run "shortpixel" --action "purge_domain_cache" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites ShortPixel data. Always confirm the target and get explicit user approval before running.
