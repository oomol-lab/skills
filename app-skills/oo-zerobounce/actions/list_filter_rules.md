# ZeroBounce · `list_filter_rules`

List the current ZeroBounce custom allow/block filter rules.

- **Service**: `zerobounce`
- **Action**: `list_filter_rules`
- **Action id**: `zerobounce.list_filter_rules`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zerobounce" --action "list_filter_rules"
```

## Run

```bash
oo connector run "zerobounce" --action "list_filter_rules" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
