# Postmark · `create_template`

Create a new template in the current Postmark server.

- **Service**: `postmark`
- **Action**: `create_template`
- **Action id**: `postmark.create_template`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postmark" --action "create_template"
```

## Run

```bash
oo connector run "postmark" --action "create_template" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postmark state. Confirm the exact payload and intended effect with the user before running.
