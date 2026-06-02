# PostHog · `get_insight`

Get a PostHog insight by ID with a stable top-level connector shape.

- **Service**: `posthog`
- **Action**: `get_insight`
- **Action id**: `posthog.get_insight`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "get_insight"
```

## Run

```bash
oo connector run "posthog" --action "get_insight" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
