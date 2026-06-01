# Fireflies · `delete_transcript`

Delete a Fireflies transcript by transcript ID.

- **Service**: `fireflies`
- **Action**: `delete_transcript`
- **Action id**: `fireflies.delete_transcript`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fireflies" --action "delete_transcript"
```

## Run

```bash
oo connector run "fireflies" --action "delete_transcript" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Fireflies data. Always confirm the target and get explicit user approval before running.
