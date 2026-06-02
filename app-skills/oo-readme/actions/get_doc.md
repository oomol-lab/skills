# ReadMe · `get_doc`

Get one ReadMe doc by slug, optionally requesting the production doc version.

- **Service**: `readme`
- **Action**: `get_doc`
- **Action id**: `readme.get_doc`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "readme" --action "get_doc"
```

## Run

```bash
oo connector run "readme" --action "get_doc" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
