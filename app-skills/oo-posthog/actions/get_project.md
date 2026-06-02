# PostHog · `get_project`

Get a PostHog project from the current or specified organization.

- **Service**: `posthog`
- **Action**: `get_project`
- **Action id**: `posthog.get_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "get_project"
```

## Run

```bash
oo connector run "posthog" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
