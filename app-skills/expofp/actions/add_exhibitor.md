# ExpoFP · `add_exhibitor`

Create a new exhibitor in one ExpoFP expo.

- **Service**: `expofp`
- **Action**: `add_exhibitor`
- **Action id**: `expofp.add_exhibitor`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "expofp" --action "add_exhibitor"
```

## Run

```bash
oo connector run "expofp" --action "add_exhibitor" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ExpoFP state. Confirm the exact payload and intended effect with the user before running.
