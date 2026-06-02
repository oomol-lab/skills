# RenderForm · `get_template`

Get one RenderForm template by identifier and return its normalized template details.

- **Service**: `renderform`
- **Action**: `get_template`
- **Action id**: `renderform.get_template`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "renderform" --action "get_template"
```

## Run

```bash
oo connector run "renderform" --action "get_template" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
