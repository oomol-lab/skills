# Veriphone · `get_credits`

Retrieve the current Veriphone verification credit summary for the account.

- **Service**: `veriphone`
- **Action**: `get_credits`
- **Action id**: `veriphone.get_credits`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "veriphone" --action "get_credits"
```

## Run

```bash
oo connector run "veriphone" --action "get_credits" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
