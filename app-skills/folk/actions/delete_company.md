# folk · `delete_company`

Delete one Folk company by company ID.

- **Service**: `folk`
- **Action**: `delete_company`
- **Action id**: `folk.delete_company`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "folk" --action "delete_company"
```

## Run

```bash
oo connector run "folk" --action "delete_company" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites folk data. Always confirm the target and get explicit user approval before running.
