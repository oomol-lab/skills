# Gamma · `list_themes`

List the Gamma themes available in the current workspace.

- **Service**: `gamma`
- **Action**: `list_themes`
- **Action id**: `gamma.list_themes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gamma" --action "list_themes"
```

## Run

```bash
oo connector run "gamma" --action "list_themes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
