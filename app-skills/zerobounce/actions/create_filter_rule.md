# ZeroBounce · `create_filter_rule`

Create or update one ZeroBounce custom allow/block filter rule.

- **Service**: `zerobounce`
- **Action**: `create_filter_rule`
- **Action id**: `zerobounce.create_filter_rule`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zerobounce" --action "create_filter_rule"
```

## Run

```bash
oo connector run "zerobounce" --action "create_filter_rule" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ZeroBounce state. Confirm the exact payload and intended effect with the user before running.
