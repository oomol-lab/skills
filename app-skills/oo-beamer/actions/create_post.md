# Beamer · `create_post`

Create a new Beamer changelog post with one or more translations.

- **Service**: `beamer`
- **Action**: `create_post`
- **Action id**: `beamer.create_post`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "beamer" --action "create_post"
```

## Run

```bash
oo connector run "beamer" --action "create_post" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Beamer state. Confirm the exact payload and intended effect with the user before running.
