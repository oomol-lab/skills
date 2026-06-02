# PostHog · `get_async_query_status`

Retrieve the status and available result payload for a PostHog async query.

- **Service**: `posthog`
- **Action**: `get_async_query_status`
- **Action id**: `posthog.get_async_query_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "get_async_query_status"
```

## Run

```bash
oo connector run "posthog" --action "get_async_query_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
