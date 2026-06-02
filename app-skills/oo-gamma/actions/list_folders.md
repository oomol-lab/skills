# Gamma · `list_folders`

List the Gamma folders available in the current workspace.

- **Service**: `gamma`
- **Action**: `list_folders`
- **Action id**: `gamma.list_folders`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gamma" --action "list_folders"
```

## Run

```bash
oo connector run "gamma" --action "list_folders" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
