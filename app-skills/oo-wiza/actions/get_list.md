# Wiza · `get_list`

Get the status and details of a Wiza list by ID, matching the WIZA_GET_LIST Composio tool.

- **Service**: `wiza`
- **Action**: `get_list`
- **Action id**: `wiza.get_list`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "wiza" --action "get_list"
```

## Run

```bash
oo connector run "wiza" --action "get_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
