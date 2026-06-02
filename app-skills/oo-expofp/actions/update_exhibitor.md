# ExpoFP · `update_exhibitor`

Partially update an ExpoFP exhibitor by exhibitor ID.

- **Service**: `expofp`
- **Action**: `update_exhibitor`
- **Action id**: `expofp.update_exhibitor`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "expofp" --action "update_exhibitor"
```

## Run

```bash
oo connector run "expofp" --action "update_exhibitor" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ExpoFP state. Confirm the exact payload and intended effect with the user before running.
