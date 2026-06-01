# Agenty · `get_list`

Get one Agenty list by list identifier.

- **Service**: `agenty`
- **Action**: `get_list`
- **Action id**: `agenty.get_list`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agenty" --action "get_list"
```

## Run

```bash
oo connector run "agenty" --action "get_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
