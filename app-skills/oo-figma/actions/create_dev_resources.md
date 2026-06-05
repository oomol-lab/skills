# Figma · `create_dev_resources`

Create dev resources and attach them to Figma file nodes.

- **Service**: `figma`
- **Action**: `create_dev_resources`
- **Action id**: `figma.create_dev_resources`
- **Required scopes**: figma.file.dev_resources.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "figma" --action "create_dev_resources"
```

## Run

```bash
oo connector run "figma" --action "create_dev_resources" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Figma state. Confirm the exact payload and intended effect with the user before running.
