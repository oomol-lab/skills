# HotspotSystem · `get_current_owner`

Verify the HotspotSystem API key and return the connected operator account.

- **Service**: `hotspotsystem`
- **Action**: `get_current_owner`
- **Action id**: `hotspotsystem.get_current_owner`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hotspotsystem" --action "get_current_owner"
```

## Run

```bash
oo connector run "hotspotsystem" --action "get_current_owner" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
