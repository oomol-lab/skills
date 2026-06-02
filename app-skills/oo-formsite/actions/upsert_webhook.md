# Formsite · `upsert_webhook`

Create a new Formsite webhook, or update the existing webhook that matches the same URL.

- **Service**: `formsite`
- **Action**: `upsert_webhook`
- **Action id**: `formsite.upsert_webhook`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "formsite" --action "upsert_webhook"
```

## Run

```bash
oo connector run "formsite" --action "upsert_webhook" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Formsite state. Confirm the exact payload and intended effect with the user before running.
