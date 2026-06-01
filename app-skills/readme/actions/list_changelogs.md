# ReadMe · `list_changelogs`

List ReadMe changelog entries with optional pagination.

- **Service**: `readme`
- **Action**: `list_changelogs`
- **Action id**: `readme.list_changelogs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "readme" --action "list_changelogs"
```

## Run

```bash
oo connector run "readme" --action "list_changelogs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
