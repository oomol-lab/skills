# Calendly · `create_single_use_scheduling_link`

Create one single-use scheduling link from an existing Calendly event type without customization.

- **Service**: `calendly`
- **Action**: `create_single_use_scheduling_link`
- **Action id**: `calendly.create_single_use_scheduling_link`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "create_single_use_scheduling_link"
```

## Run

```bash
oo connector run "calendly" --action "create_single_use_scheduling_link" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Calendly state. Confirm the exact payload and intended effect with the user before running.
