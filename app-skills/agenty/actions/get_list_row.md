# Agenty · `get_list_row`

Get one Agenty list row by list and row identifiers.

- **Service**: `agenty`
- **Action**: `get_list_row`
- **Action id**: `agenty.get_list_row`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agenty" --action "get_list_row"
```

## Run

```bash
oo connector run "agenty" --action "get_list_row" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
