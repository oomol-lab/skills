# DataScope · `list_list_elements`

List all elements from one DataScope metadata list type.

- **Service**: `datascope`
- **Action**: `list_list_elements`
- **Action id**: `datascope.list_list_elements`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "datascope" --action "list_list_elements"
```

## Run

```bash
oo connector run "datascope" --action "list_list_elements" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
