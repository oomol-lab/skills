# Slite · `delete_note`

Delete a Slite note and its children by note identifier.

- **Service**: `slite`
- **Action**: `delete_note`
- **Action id**: `slite.delete_note`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "slite" --action "delete_note"
```

## Run

```bash
oo connector run "slite" --action "delete_note" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Slite data. Always confirm the target and get explicit user approval before running.
