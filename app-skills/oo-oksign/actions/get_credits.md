# OKSign · `get_credits`

Get OKSign credits balance, expiry, and account storage details.

- **Service**: `oksign`
- **Action**: `get_credits`
- **Action id**: `oksign.get_credits`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "oksign" --action "get_credits"
```

## Run

```bash
oo connector run "oksign" --action "get_credits" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
