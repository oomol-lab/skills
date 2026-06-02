# PandaDoc · `create_template`

Create a PandaDoc template from structured content or from a local PDF upload.

- **Service**: `pandadoc`
- **Action**: `create_template`
- **Action id**: `pandadoc.create_template`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pandadoc" --action "create_template"
```

## Run

```bash
oo connector run "pandadoc" --action "create_template" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes PandaDoc state. Confirm the exact payload and intended effect with the user before running.
