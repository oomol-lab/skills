# Better Stack · `create_incident`

Create a Better Stack incident and alert the current on-call responder.

- **Service**: `better_stack`
- **Action**: `create_incident`
- **Action id**: `better_stack.create_incident`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "better_stack" --action "create_incident"
```

## Run

```bash
oo connector run "better_stack" --action "create_incident" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Better Stack state. Confirm the exact payload and intended effect with the user before running.
