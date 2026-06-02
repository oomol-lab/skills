# Codacy · `list_tools`

List Codacy code analysis tools.

- **Service**: `codacy`
- **Action**: `list_tools`
- **Action id**: `codacy.list_tools`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "codacy" --action "list_tools"
```

## Run

```bash
oo connector run "codacy" --action "list_tools" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
