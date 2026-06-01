# Codacy · `get_tool_pattern`

Retrieve one code pattern for a Codacy analysis tool.

- **Service**: `codacy`
- **Action**: `get_tool_pattern`
- **Action id**: `codacy.get_tool_pattern`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "codacy" --action "get_tool_pattern"
```

## Run

```bash
oo connector run "codacy" --action "get_tool_pattern" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
