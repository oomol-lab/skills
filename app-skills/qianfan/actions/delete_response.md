# Baidu Qianfan · `delete_response`

Delete a previously stored Baidu Qianfan response by its identifier.

- **Service**: `qianfan`
- **Action**: `delete_response`
- **Action id**: `qianfan.delete_response`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "qianfan" --action "delete_response"
```

## Run

```bash
oo connector run "qianfan" --action "delete_response" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Baidu Qianfan data. Always confirm the target and get explicit user approval before running.
