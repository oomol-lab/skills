# Agenty · `clear_list_rows`

Delete all rows from one Agenty list.

- **Service**: `agenty`
- **Action**: `clear_list_rows`
- **Action id**: `agenty.clear_list_rows`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agenty" --action "clear_list_rows"
```

## Run

```bash
oo connector run "agenty" --action "clear_list_rows" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Agenty data. Always confirm the target and get explicit user approval before running.
