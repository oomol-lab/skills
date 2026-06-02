# Calendly · `get_routing_form_submission`

Retrieve one Calendly routing form submission by submission URI.

- **Service**: `calendly`
- **Action**: `get_routing_form_submission`
- **Action id**: `calendly.get_routing_form_submission`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "get_routing_form_submission"
```

## Run

```bash
oo connector run "calendly" --action "get_routing_form_submission" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
