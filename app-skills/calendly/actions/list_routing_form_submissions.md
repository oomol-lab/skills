# Calendly · `list_routing_form_submissions`

List Calendly routing form submissions for one routing form.

- **Service**: `calendly`
- **Action**: `list_routing_form_submissions`
- **Action id**: `calendly.list_routing_form_submissions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "list_routing_form_submissions"
```

## Run

```bash
oo connector run "calendly" --action "list_routing_form_submissions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
