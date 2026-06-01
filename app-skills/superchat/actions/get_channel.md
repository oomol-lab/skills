# Superchat · `get_channel`

Get one Superchat channel by channel_id.

- **Service**: `superchat`
- **Action**: `get_channel`
- **Action id**: `superchat.get_channel`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "superchat" --action "get_channel"
```

## Run

```bash
oo connector run "superchat" --action "get_channel" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
