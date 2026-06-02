# Simple Analytics · `list_websites`

List websites available to the authenticated Simple Analytics account.

- **Service**: `simple_analytics`
- **Action**: `list_websites`
- **Action id**: `simple_analytics.list_websites`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "simple_analytics" --action "list_websites"
```

## Run

```bash
oo connector run "simple_analytics" --action "list_websites" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
