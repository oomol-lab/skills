# PostHog · `get_event_definition_primary_properties`

Get primary properties configured for PostHog event definitions.

- **Service**: `posthog`
- **Action**: `get_event_definition_primary_properties`
- **Action id**: `posthog.get_event_definition_primary_properties`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "posthog" --action "get_event_definition_primary_properties"
```

## Run

```bash
oo connector run "posthog" --action "get_event_definition_primary_properties" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
