# Calendly · `list_routing_forms`

List Calendly routing forms for one organization.

- **Service**: `calendly`
- **Action**: `list_routing_forms`
- **Action id**: `calendly.list_routing_forms`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "list_routing_forms"
```

## Run

```bash
oo connector run "calendly" --action "list_routing_forms" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
