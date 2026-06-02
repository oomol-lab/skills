# Vapi · `create_analytics_query`

Create and execute one or more Vapi analytics queries across call and subscription data.

- **Service**: `vapi`
- **Action**: `create_analytics_query`
- **Action id**: `vapi.create_analytics_query`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vapi" --action "create_analytics_query"
```

## Run

```bash
oo connector run "vapi" --action "create_analytics_query" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Vapi state. Confirm the exact payload and intended effect with the user before running.
