# SendGrid · `get_user_scopes`

Get the SendGrid API key scopes available to the current credential.

- **Service**: `sendgrid`
- **Action**: `get_user_scopes`
- **Action id**: `sendgrid.get_user_scopes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendgrid" --action "get_user_scopes"
```

## Run

```bash
oo connector run "sendgrid" --action "get_user_scopes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
