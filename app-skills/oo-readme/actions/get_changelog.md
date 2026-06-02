# ReadMe · `get_changelog`

Get one ReadMe changelog entry by slug.

- **Service**: `readme`
- **Action**: `get_changelog`
- **Action id**: `readme.get_changelog`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "readme" --action "get_changelog"
```

## Run

```bash
oo connector run "readme" --action "get_changelog" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
