# Pushbullet · `delete_push`

Delete one Pushbullet push by identifier.

- **Service**: `pushbullet`
- **Action**: `delete_push`
- **Action id**: `pushbullet.delete_push`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushbullet" --action "delete_push"
```

## Run

```bash
oo connector run "pushbullet" --action "delete_push" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Pushbullet data. Always confirm the target and get explicit user approval before running.
