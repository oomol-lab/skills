# Pushbullet · `list_pushes`

List Pushbullet pushes with optional active, modified-after, and cursor filters.

- **Service**: `pushbullet`
- **Action**: `list_pushes`
- **Action id**: `pushbullet.list_pushes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushbullet" --action "list_pushes"
```

## Run

```bash
oo connector run "pushbullet" --action "list_pushes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
