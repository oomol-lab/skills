# Linkhut · `delete_bookmark`

Delete a Linkhut bookmark by URL.

- **Service**: `linkhut`
- **Action**: `delete_bookmark`
- **Action id**: `linkhut.delete_bookmark`
- **Required scopes**: linkhut.posts.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linkhut" --action "delete_bookmark"
```

## Run

```bash
oo connector run "linkhut" --action "delete_bookmark" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Linkhut data. Always confirm the target and get explicit user approval before running.
