# PostHog · `list_annotations`

List annotations for a PostHog project.

- **Service**: `posthog`
- **Action**: `list_annotations`
- **Action id**: `posthog.list_annotations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "list_annotations"
```

## Run

```bash
oo connector run "posthog" --action "list_annotations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
