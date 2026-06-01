# Route4Me · `delete_optimizations`

Delete one or more Route4Me optimization problems by ID.

- **Service**: `route4me`
- **Action**: `delete_optimizations`
- **Action id**: `route4me.delete_optimizations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "route4me" --action "delete_optimizations"
```

## Run

```bash
oo connector run "route4me" --action "delete_optimizations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Route4Me data. Always confirm the target and get explicit user approval before running.
