# Clearout · `verify_gibberish_email`

Check whether an email address looks like a gibberish account.

- **Service**: `clearout`
- **Action**: `verify_gibberish_email`
- **Action id**: `clearout.verify_gibberish_email`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clearout" --action "verify_gibberish_email"
```

## Run

```bash
oo connector run "clearout" --action "verify_gibberish_email" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
