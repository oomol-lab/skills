# Canva · `get_design`

Get metadata for a Canva design, including owner, URLs, and thumbnail details.

- **Service**: `canva`
- **Action**: `get_design`
- **Action id**: `canva.get_design`
- **Required scopes**: canva.design.meta.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "canva" --action "get_design"
```

## Run

```bash
oo connector run "canva" --action "get_design" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
