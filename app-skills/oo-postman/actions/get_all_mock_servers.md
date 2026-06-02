# Postman · `get_all_mock_servers`

Tool to get all active mock servers accessible to the authenticated user. Use when you need to list or retrieve mock servers from Postman. By default, returns only mock servers you created across all workspaces. Can be filtered by workspace ID to get mock servers specific to a workspace.

- **Service**: `postman`
- **Action**: `get_all_mock_servers`
- **Action id**: `postman.get_all_mock_servers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_all_mock_servers"
```

## Run

```bash
oo connector run "postman" --action "get_all_mock_servers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
