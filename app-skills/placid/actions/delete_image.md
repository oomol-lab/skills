# Placid · `delete_image`

Delete one Placid image request by identifier and return whether the delete succeeded.

- **Service**: `placid`
- **Action**: `delete_image`
- **Action id**: `placid.delete_image`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "placid" --action "delete_image"
```

## Run

```bash
oo connector run "placid" --action "delete_image" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Placid data. Always confirm the target and get explicit user approval before running.
