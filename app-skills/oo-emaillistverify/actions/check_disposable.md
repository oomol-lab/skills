# EmailListVerify · `check_disposable`

Check whether one email domain is disposable with EmailListVerify.

- **Service**: `emaillistverify`
- **Action**: `check_disposable`
- **Action id**: `emaillistverify.check_disposable`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "emaillistverify" --action "check_disposable"
```

## Run

```bash
oo connector run "emaillistverify" --action "check_disposable" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
