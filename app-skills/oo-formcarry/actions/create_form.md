# Formcarry · `create_form`

Create a new Formcarry form with basic notification, redirect, and storage settings.

- **Service**: `formcarry`
- **Action**: `create_form`
- **Action id**: `formcarry.create_form`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "formcarry" --action "create_form"
```

## Run

```bash
oo connector run "formcarry" --action "create_form" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Formcarry state. Confirm the exact payload and intended effect with the user before running.
