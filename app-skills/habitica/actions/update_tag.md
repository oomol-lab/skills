# Habitica · `update_tag`

Update one Habitica tag by tag ID.

- **Service**: `habitica`
- **Action**: `update_tag`
- **Action id**: `habitica.update_tag`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "habitica" --action "update_tag"
```

## Run

```bash
oo connector run "habitica" --action "update_tag" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Habitica state. Confirm the exact payload and intended effect with the user before running.
