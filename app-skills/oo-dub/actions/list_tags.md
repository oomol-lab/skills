# Dub · `list_tags`

List tags in the authenticated Dub workspace.

- **Service**: `dub`
- **Action**: `list_tags`
- **Action id**: `dub.list_tags`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dub" --action "list_tags"
```

## Run

```bash
oo connector run "dub" --action "list_tags" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
