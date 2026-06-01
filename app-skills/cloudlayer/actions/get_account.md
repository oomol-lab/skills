# cloudlayer.io · `get_account`

Get the current cloudlayer.io account usage, limits, and job totals for the API key.

- **Service**: `cloudlayer`
- **Action**: `get_account`
- **Action id**: `cloudlayer.get_account`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudlayer" --action "get_account"
```

## Run

```bash
oo connector run "cloudlayer" --action "get_account" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
