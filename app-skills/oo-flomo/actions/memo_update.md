# flomo · `memo_update`

Update an existing flomo memo through the flomo Max MCP server. The exact arguments are validated by flomo MCP.

- **Service**: `flomo`
- **Action**: `memo_update`
- **Action id**: `flomo.memo_update`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "flomo" --action "memo_update"
```

## Run

```bash
oo connector run "flomo" --action "memo_update" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes flomo state. Confirm the exact payload and intended effect with the user before running.
