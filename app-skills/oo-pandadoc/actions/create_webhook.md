# PandaDoc · `create_webhook`

Create a PandaDoc webhook subscription for document lifecycle events.

- **Service**: `pandadoc`
- **Action**: `create_webhook`
- **Action id**: `pandadoc.create_webhook`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pandadoc" --action "create_webhook"
```

## Run

```bash
oo connector run "pandadoc" --action "create_webhook" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes PandaDoc state. Confirm the exact payload and intended effect with the user before running.
