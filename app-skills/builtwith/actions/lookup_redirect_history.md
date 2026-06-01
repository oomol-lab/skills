# BuiltWith · `lookup_redirect_history`

Retrieve the inbound and outbound redirect history for a root domain from BuiltWith.

- **Service**: `builtwith`
- **Action**: `lookup_redirect_history`
- **Action id**: `builtwith.lookup_redirect_history`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "builtwith" --action "lookup_redirect_history"
```

## Run

```bash
oo connector run "builtwith" --action "lookup_redirect_history" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
