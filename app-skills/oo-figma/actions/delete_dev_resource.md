# Figma · `delete_dev_resource`

Delete a Figma dev resource from a main file.

- **Service**: `figma`
- **Action**: `delete_dev_resource`
- **Action id**: `figma.delete_dev_resource`
- **Required scopes**: file_dev_resources:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "figma" --action "delete_dev_resource"
```

## Run

```bash
oo connector run "figma" --action "delete_dev_resource" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Figma data. Always confirm the target and get explicit user approval before running.
