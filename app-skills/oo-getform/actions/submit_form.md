# Getform · `submit_form`

Submit a protected Forminit form with JSON blocks using the documented sender, tracking, and field block types.

- **Service**: `getform`
- **Action**: `submit_form`
- **Action id**: `getform.submit_form`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "getform" --action "submit_form"
```

## Run

```bash
oo connector run "getform" --action "submit_form" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Getform state. Confirm the exact payload and intended effect with the user before running.
