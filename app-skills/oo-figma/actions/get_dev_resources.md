# Figma · `get_dev_resources`

Get dev resources attached to a Figma main file.

- **Service**: `figma`
- **Action**: `get_dev_resources`
- **Action id**: `figma.get_dev_resources`
- **Required scopes**: figma.file.dev_resources.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "figma" --action "get_dev_resources"
```

## Run

```bash
oo connector run "figma" --action "get_dev_resources" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
