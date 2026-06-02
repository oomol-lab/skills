# Wit.ai · `create_trait`

Create a new Wit.ai trait with one or more canonical values.

- **Service**: `wit_ai`
- **Action**: `create_trait`
- **Action id**: `wit_ai.create_trait`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "wit_ai" --action "create_trait"
```

## Run

```bash
oo connector run "wit_ai" --action "create_trait" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Wit.ai state. Confirm the exact payload and intended effect with the user before running.
