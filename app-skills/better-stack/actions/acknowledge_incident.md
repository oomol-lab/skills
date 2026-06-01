# Better Stack · `acknowledge_incident`

Acknowledge a Better Stack incident to stop further escalations.

- **Service**: `better_stack`
- **Action**: `acknowledge_incident`
- **Action id**: `better_stack.acknowledge_incident`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "better_stack" --action "acknowledge_incident"
```

## Run

```bash
oo connector run "better_stack" --action "acknowledge_incident" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
