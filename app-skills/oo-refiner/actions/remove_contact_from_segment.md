# Refiner · `remove_contact_from_segment`

Remove a Refiner contact from a manual segment.

- **Service**: `refiner`
- **Action**: `remove_contact_from_segment`
- **Action id**: `refiner.remove_contact_from_segment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "refiner" --action "remove_contact_from_segment"
```

## Run

```bash
oo connector run "refiner" --action "remove_contact_from_segment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Refiner data. Always confirm the target and get explicit user approval before running.
