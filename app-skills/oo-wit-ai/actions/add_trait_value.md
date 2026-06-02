# Wit.ai · `add_trait_value`

Add a canonical value to an existing Wit.ai trait.

- **Service**: `wit_ai`
- **Action**: `add_trait_value`
- **Action id**: `wit_ai.add_trait_value`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "wit_ai" --action "add_trait_value"
```

## Run

```bash
oo connector run "wit_ai" --action "add_trait_value" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Wit.ai state. Confirm the exact payload and intended effect with the user before running.
