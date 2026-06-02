# Better Stack · `list_incident_comments`

List all comments attached to a Better Stack incident.

- **Service**: `better_stack`
- **Action**: `list_incident_comments`
- **Action id**: `better_stack.list_incident_comments`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "better_stack" --action "list_incident_comments"
```

## Run

```bash
oo connector run "better_stack" --action "list_incident_comments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
