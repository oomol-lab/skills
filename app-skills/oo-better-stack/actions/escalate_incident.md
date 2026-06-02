# Better Stack · `escalate_incident`

Escalate a Better Stack incident to a user, team, schedule, policy, or organization.

- **Service**: `better_stack`
- **Action**: `escalate_incident`
- **Action id**: `better_stack.escalate_incident`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "better_stack" --action "escalate_incident"
```

## Run

```bash
oo connector run "better_stack" --action "escalate_incident" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
