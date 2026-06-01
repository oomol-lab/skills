# Superchat · `list_channels`

List Superchat channels in the current workspace.

- **Service**: `superchat`
- **Action**: `list_channels`
- **Action id**: `superchat.list_channels`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "superchat" --action "list_channels"
```

## Run

```bash
oo connector run "superchat" --action "list_channels" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
