# Beeminder · `list_archived_goals`

List archived Beeminder goals for a user.

- **Service**: `beeminder`
- **Action**: `list_archived_goals`
- **Action id**: `beeminder.list_archived_goals`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "beeminder" --action "list_archived_goals"
```

## Run

```bash
oo connector run "beeminder" --action "list_archived_goals" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
