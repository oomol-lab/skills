# V2EX · `boost_topic`

Boost one of the authenticated member's V2EX topics to the homepage.

- **Service**: `v2ex`
- **Action**: `boost_topic`
- **Action id**: `v2ex.boost_topic`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v2ex" --action "boost_topic"
```

## Run

```bash
oo connector run "v2ex" --action "boost_topic" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
