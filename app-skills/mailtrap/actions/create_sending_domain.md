# Mailtrap · `create_sending_domain`

Create one Mailtrap sending domain.

- **Service**: `mailtrap`
- **Action**: `create_sending_domain`
- **Action id**: `mailtrap.create_sending_domain`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "create_sending_domain"
```

## Run

```bash
oo connector run "mailtrap" --action "create_sending_domain" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mailtrap state. Confirm the exact payload and intended effect with the user before running.
