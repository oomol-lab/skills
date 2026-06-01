# Systeme.io · `create_webhook`

Create a new webhook in Systeme.io.

- **Service**: `systeme_io`
- **Action**: `create_webhook`
- **Action id**: `systeme_io.create_webhook`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "systeme_io" --action "create_webhook"
```

## Run

```bash
oo connector run "systeme_io" --action "create_webhook" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Systeme.io state. Confirm the exact payload and intended effect with the user before running.
