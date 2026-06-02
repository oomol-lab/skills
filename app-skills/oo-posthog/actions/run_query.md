# PostHog · `run_query`

Run a PostHog query and return a stable top-level query result shape.

- **Service**: `posthog`
- **Action**: `run_query`
- **Action id**: `posthog.run_query`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "run_query"
```

## Run

```bash
oo connector run "posthog" --action "run_query" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
