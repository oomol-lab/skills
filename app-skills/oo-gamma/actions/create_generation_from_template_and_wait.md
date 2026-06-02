# Gamma · `create_generation_from_template_and_wait`

Create a Gamma generation from a template and keep polling until it completes, fails, or times out.

- **Service**: `gamma`
- **Action**: `create_generation_from_template_and_wait`
- **Action id**: `gamma.create_generation_from_template_and_wait`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gamma" --action "create_generation_from_template_and_wait"
```

## Run

```bash
oo connector run "gamma" --action "create_generation_from_template_and_wait" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Gamma state. Confirm the exact payload and intended effect with the user before running.
