# Placid · `get_template`

Get one Placid template by UUID and return its dynamic layer metadata for downstream image generation.

- **Service**: `placid`
- **Action**: `get_template`
- **Action id**: `placid.get_template`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "placid" --action "get_template"
```

## Run

```bash
oo connector run "placid" --action "get_template" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
