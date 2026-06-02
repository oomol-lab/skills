# PostHog · `create_annotation`

Create an annotation in a PostHog project.

- **Service**: `posthog`
- **Action**: `create_annotation`
- **Action id**: `posthog.create_annotation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "create_annotation"
```

## Run

```bash
oo connector run "posthog" --action "create_annotation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes PostHog state. Confirm the exact payload and intended effect with the user before running.
