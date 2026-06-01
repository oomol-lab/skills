# Habitica · `delete_tag`

Delete one Habitica tag by tag ID.

- **Service**: `habitica`
- **Action**: `delete_tag`
- **Action id**: `habitica.delete_tag`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "habitica" --action "delete_tag"
```

## Run

```bash
oo connector run "habitica" --action "delete_tag" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Habitica data. Always confirm the target and get explicit user approval before running.
