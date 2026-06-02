# ShortPixel · `purge_domain_storage`

Purge ShortPixel stored optimized variants for one associated domain.

- **Service**: `shortpixel`
- **Action**: `purge_domain_storage`
- **Action id**: `shortpixel.purge_domain_storage`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shortpixel" --action "purge_domain_storage"
```

## Run

```bash
oo connector run "shortpixel" --action "purge_domain_storage" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites ShortPixel data. Always confirm the target and get explicit user approval before running.
