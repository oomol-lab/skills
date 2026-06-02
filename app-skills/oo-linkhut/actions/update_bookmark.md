# Linkhut · `update_bookmark`

Update an existing Linkhut bookmark by URL.

- **Service**: `linkhut`
- **Action**: `update_bookmark`
- **Action id**: `linkhut.update_bookmark`
- **Required scopes**: linkhut.posts.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linkhut" --action "update_bookmark"
```

## Run

```bash
oo connector run "linkhut" --action "update_bookmark" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Linkhut state. Confirm the exact payload and intended effect with the user before running.
