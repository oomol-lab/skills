# EmailListVerify · `get_credits`

Retrieve the available EmailListVerify on-demand and subscription credits.

- **Service**: `emaillistverify`
- **Action**: `get_credits`
- **Action id**: `emaillistverify.get_credits`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "emaillistverify" --action "get_credits"
```

## Run

```bash
oo connector run "emaillistverify" --action "get_credits" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
