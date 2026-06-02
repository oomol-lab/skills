# PostHog · `cancel_query`

Cancel a PostHog async query by project ID and query ID.

- **Service**: `posthog`
- **Action**: `cancel_query`
- **Action id**: `posthog.cancel_query`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "cancel_query"
```

## Run

```bash
oo connector run "posthog" --action "cancel_query" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
