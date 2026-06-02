# Algolia · `delete_records_by_filter`

Delete Algolia records that match a filter expression.

- **Service**: `algolia`
- **Action**: `delete_records_by_filter`
- **Action id**: `algolia.delete_records_by_filter`
- **Required scopes**: deleteIndex

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "algolia" --action "delete_records_by_filter"
```

## Run

```bash
oo connector run "algolia" --action "delete_records_by_filter" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Algolia data. Always confirm the target and get explicit user approval before running.
