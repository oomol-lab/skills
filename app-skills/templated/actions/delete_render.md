# Templated · `delete_render`

Delete a Templated render by its render ID.

- **Service**: `templated`
- **Action**: `delete_render`
- **Action id**: `templated.delete_render`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "templated" --action "delete_render"
```

## Run

```bash
oo connector run "templated" --action "delete_render" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Templated data. Always confirm the target and get explicit user approval before running.
