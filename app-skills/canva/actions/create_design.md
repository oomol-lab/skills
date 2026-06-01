# Canva · `create_design`

Create a new Canva design from a preset type, custom dimensions, an optional image asset, an existing design, or a brand template.

- **Service**: `canva`
- **Action**: `create_design`
- **Action id**: `canva.create_design`
- **Required scopes**: canva.design.content.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "canva" --action "create_design"
```

## Run

```bash
oo connector run "canva" --action "create_design" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Canva state. Confirm the exact payload and intended effect with the user before running.
