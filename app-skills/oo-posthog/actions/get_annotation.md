# PostHog · `get_annotation`

Get a PostHog annotation by ID.

- **Service**: `posthog`
- **Action**: `get_annotation`
- **Action id**: `posthog.get_annotation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "get_annotation"
```

## Run

```bash
oo connector run "posthog" --action "get_annotation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
