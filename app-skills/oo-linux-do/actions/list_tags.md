# Linux DO · `list_tags`

List public Linux DO tags.

- **Service**: `linux_do`
- **Action**: `list_tags`
- **Action id**: `linux_do.list_tags`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linux_do" --action "list_tags"
```

## Run

```bash
oo connector run "linux_do" --action "list_tags" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
