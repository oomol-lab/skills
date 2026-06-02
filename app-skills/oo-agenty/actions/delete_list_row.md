# Agenty · `delete_list_row`

Delete one Agenty list row by list and row identifiers.

- **Service**: `agenty`
- **Action**: `delete_list_row`
- **Action id**: `agenty.delete_list_row`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agenty" --action "delete_list_row"
```

## Run

```bash
oo connector run "agenty" --action "delete_list_row" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Agenty data. Always confirm the target and get explicit user approval before running.
