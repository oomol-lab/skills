# Langbase · `delete_memory`

Delete an existing Langbase memory by name and return whether the delete request succeeded.

- **Service**: `langbase`
- **Action**: `delete_memory`
- **Action id**: `langbase.delete_memory`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "langbase" --action "delete_memory"
```

## Run

```bash
oo connector run "langbase" --action "delete_memory" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Langbase data. Always confirm the target and get explicit user approval before running.
