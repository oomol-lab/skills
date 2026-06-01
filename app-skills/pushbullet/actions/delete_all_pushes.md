# Pushbullet · `delete_all_pushes`

Delete all pushes belonging to the current Pushbullet user.

- **Service**: `pushbullet`
- **Action**: `delete_all_pushes`
- **Action id**: `pushbullet.delete_all_pushes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushbullet" --action "delete_all_pushes"
```

## Run

```bash
oo connector run "pushbullet" --action "delete_all_pushes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Pushbullet data. Always confirm the target and get explicit user approval before running.
