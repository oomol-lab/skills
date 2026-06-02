# Gist · `create_gist_comment`

Create a comment on a GitHub gist.

- **Service**: `gist`
- **Action**: `create_gist_comment`
- **Action id**: `gist.create_gist_comment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gist" --action "create_gist_comment"
```

## Run

```bash
oo connector run "gist" --action "create_gist_comment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Gist state. Confirm the exact payload and intended effect with the user before running.
