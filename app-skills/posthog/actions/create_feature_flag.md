# PostHog · `create_feature_flag`

Create a feature flag in a PostHog project.

- **Service**: `posthog`
- **Action**: `create_feature_flag`
- **Action id**: `posthog.create_feature_flag`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "create_feature_flag"
```

## Run

```bash
oo connector run "posthog" --action "create_feature_flag" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes PostHog state. Confirm the exact payload and intended effect with the user before running.
