# Knack · `delete_record`

Delete one Knack record by object key and record ID.

- **Service**: `knack`
- **Action**: `delete_record`
- **Action id**: `knack.delete_record`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "knack" --action "delete_record"
```

## Run

```bash
oo connector run "knack" --action "delete_record" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Knack data. Always confirm the target and get explicit user approval before running.
