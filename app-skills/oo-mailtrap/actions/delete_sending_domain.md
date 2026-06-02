# Mailtrap · `delete_sending_domain`

Delete one Mailtrap sending domain.

- **Service**: `mailtrap`
- **Action**: `delete_sending_domain`
- **Action id**: `mailtrap.delete_sending_domain`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "delete_sending_domain"
```

## Run

```bash
oo connector run "mailtrap" --action "delete_sending_domain" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Mailtrap data. Always confirm the target and get explicit user approval before running.
