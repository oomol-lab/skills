# BunnyCDN · `purge_pull_zone_cache`

Purge the cache for a Bunny Pull Zone, optionally restricted to one cache tag.

- **Service**: `bunnycdn`
- **Action**: `purge_pull_zone_cache`
- **Action id**: `bunnycdn.purge_pull_zone_cache`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bunnycdn" --action "purge_pull_zone_cache"
```

## Run

```bash
oo connector run "bunnycdn" --action "purge_pull_zone_cache" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites BunnyCDN data. Always confirm the target and get explicit user approval before running.
