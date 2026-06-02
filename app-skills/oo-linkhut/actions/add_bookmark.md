# Linkhut · `add_bookmark`

Create a new bookmark in Linkhut without replacing an existing bookmark.

- **Service**: `linkhut`
- **Action**: `add_bookmark`
- **Action id**: `linkhut.add_bookmark`
- **Required scopes**: linkhut.posts.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linkhut" --action "add_bookmark"
```

## Run

```bash
oo connector run "linkhut" --action "add_bookmark" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Linkhut state. Confirm the exact payload and intended effect with the user before running.
