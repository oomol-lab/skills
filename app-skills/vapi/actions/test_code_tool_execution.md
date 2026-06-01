# Vapi · `test_code_tool_execution`

Execute TypeScript code inside Vapi's code tool sandbox and return the logs, result, and execution outcome.

- **Service**: `vapi`
- **Action**: `test_code_tool_execution`
- **Action id**: `vapi.test_code_tool_execution`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vapi" --action "test_code_tool_execution"
```

## Run

```bash
oo connector run "vapi" --action "test_code_tool_execution" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
