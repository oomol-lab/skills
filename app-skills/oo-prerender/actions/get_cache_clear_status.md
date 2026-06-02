# Prerender · `get_cache_clear_status`

Check whether a Prerender cache clear job is currently running for the authenticated account.

- **Service**: `prerender`
- **Action**: `get_cache_clear_status`
- **Action id**: `prerender.get_cache_clear_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "prerender" --action "get_cache_clear_status"
```

## Run

```bash
oo connector run "prerender" --action "get_cache_clear_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Prerender data. Always confirm the target and get explicit user approval before running.
