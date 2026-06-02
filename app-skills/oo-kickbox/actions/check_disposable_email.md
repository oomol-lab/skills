# Kickbox · `check_disposable_email`

Check whether an email address or domain belongs to a disposable email provider.

- **Service**: `kickbox`
- **Action**: `check_disposable_email`
- **Action id**: `kickbox.check_disposable_email`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "kickbox" --action "check_disposable_email"
```

## Run

```bash
oo connector run "kickbox" --action "check_disposable_email" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
