# Templated · `create_render`

Create a Templated render from one template with optional shared layer overrides and image or PDF output settings.

- **Service**: `templated`
- **Action**: `create_render`
- **Action id**: `templated.create_render`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "templated" --action "create_render"
```

## Run

```bash
oo connector run "templated" --action "create_render" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Templated state. Confirm the exact payload and intended effect with the user before running.
