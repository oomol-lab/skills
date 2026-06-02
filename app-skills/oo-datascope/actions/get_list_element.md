# DataScope · `get_list_element`

Get one DataScope metadata list element by metadata type and element ID.

- **Service**: `datascope`
- **Action**: `get_list_element`
- **Action id**: `datascope.get_list_element`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "datascope" --action "get_list_element"
```

## Run

```bash
oo connector run "datascope" --action "get_list_element" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
