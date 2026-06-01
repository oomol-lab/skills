# Grist · `delete_records`

Delete one or more records from a Grist table by row ID.

- **Service**: `grist`
- **Action**: `delete_records`
- **Action id**: `grist.delete_records`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "grist" --action "delete_records"
```

## Run

```bash
oo connector run "grist" --action "delete_records" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Grist data. Always confirm the target and get explicit user approval before running.
