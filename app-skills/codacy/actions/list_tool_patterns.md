# Codacy · `list_tool_patterns`

List code patterns available for a Codacy analysis tool.

- **Service**: `codacy`
- **Action**: `list_tool_patterns`
- **Action id**: `codacy.list_tool_patterns`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "codacy" --action "list_tool_patterns"
```

## Run

```bash
oo connector run "codacy" --action "list_tool_patterns" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
