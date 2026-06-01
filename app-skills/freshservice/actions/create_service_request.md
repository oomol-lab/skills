# Freshservice · `create_service_request`

Create a Freshservice service request for one service catalog item.

- **Service**: `freshservice`
- **Action**: `create_service_request`
- **Action id**: `freshservice.create_service_request`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "freshservice" --action "create_service_request"
```

## Run

```bash
oo connector run "freshservice" --action "create_service_request" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Freshservice state. Confirm the exact payload and intended effect with the user before running.
