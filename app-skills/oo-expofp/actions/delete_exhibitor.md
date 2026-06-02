# ExpoFP · `delete_exhibitor`

Delete an ExpoFP exhibitor by exhibitor ID.

- **Service**: `expofp`
- **Action**: `delete_exhibitor`
- **Action id**: `expofp.delete_exhibitor`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "expofp" --action "delete_exhibitor"
```

## Run

```bash
oo connector run "expofp" --action "delete_exhibitor" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites ExpoFP data. Always confirm the target and get explicit user approval before running.
