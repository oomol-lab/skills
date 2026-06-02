# AppDrag · `execute_function`

Execute one AppDrag Cloud Backend API function by folder, function name, HTTP method, and optional parameters.

- **Service**: `appdrag`
- **Action**: `execute_function`
- **Action id**: `appdrag.execute_function`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "appdrag" --action "execute_function"
```

## Run

```bash
oo connector run "appdrag" --action "execute_function" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
