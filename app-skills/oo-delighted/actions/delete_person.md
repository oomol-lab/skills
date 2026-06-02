# Delighted · `delete_person`

Delete a Delighted person and all related survey history.

- **Service**: `delighted`
- **Action**: `delete_person`
- **Action id**: `delighted.delete_person`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "delighted" --action "delete_person"
```

## Run

```bash
oo connector run "delighted" --action "delete_person" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Delighted data. Always confirm the target and get explicit user approval before running.
