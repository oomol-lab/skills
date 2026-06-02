# Calendly · `get_routing_form`

Retrieve one Calendly routing form by routing-form URI.

- **Service**: `calendly`
- **Action**: `get_routing_form`
- **Action id**: `calendly.get_routing_form`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "get_routing_form"
```

## Run

```bash
oo connector run "calendly" --action "get_routing_form" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
