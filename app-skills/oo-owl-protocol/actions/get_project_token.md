# Owl Protocol · `get_project_token`

Read one Owl Protocol token metadata record by chain, contract address, and token id.

- **Service**: `owl_protocol`
- **Action**: `get_project_token`
- **Action id**: `owl_protocol.get_project_token`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "owl_protocol" --action "get_project_token"
```

## Run

```bash
oo connector run "owl_protocol" --action "get_project_token" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
