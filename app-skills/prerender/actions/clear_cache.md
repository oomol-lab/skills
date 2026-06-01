# Prerender · `clear_cache`

Queue a Prerender cache clear request for URLs matching a wildcard query pattern.

- **Service**: `prerender`
- **Action**: `clear_cache`
- **Action id**: `prerender.clear_cache`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "prerender" --action "clear_cache"
```

## Run

```bash
oo connector run "prerender" --action "clear_cache" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Prerender data. Always confirm the target and get explicit user approval before running.
