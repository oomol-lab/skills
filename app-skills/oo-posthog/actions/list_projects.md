# PostHog · `list_projects`

List PostHog projects for the current or specified organization.

- **Service**: `posthog`
- **Action**: `list_projects`
- **Action id**: `posthog.list_projects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "list_projects"
```

## Run

```bash
oo connector run "posthog" --action "list_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
