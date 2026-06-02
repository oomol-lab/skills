# folk · `delete_person`

Delete one Folk person by person ID.

- **Service**: `folk`
- **Action**: `delete_person`
- **Action id**: `folk.delete_person`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "folk" --action "delete_person"
```

## Run

```bash
oo connector run "folk" --action "delete_person" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites folk data. Always confirm the target and get explicit user approval before running.
