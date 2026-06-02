# Pushover · `client_login`

Authenticate an Open Client user with email, password, and optional two-factor code.

- **Service**: `pushover`
- **Action**: `client_login`
- **Action id**: `pushover.client_login`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushover" --action "client_login"
```

## Run

```bash
oo connector run "pushover" --action "client_login" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
