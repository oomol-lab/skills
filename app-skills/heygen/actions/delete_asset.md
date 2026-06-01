# HeyGen · `delete_asset`

Delete a HeyGen asset that is no longer needed.

- **Service**: `heygen`
- **Action**: `delete_asset`
- **Action id**: `heygen.delete_asset`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "heygen" --action "delete_asset"
```

## Run

```bash
oo connector run "heygen" --action "delete_asset" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites HeyGen data. Always confirm the target and get explicit user approval before running.
