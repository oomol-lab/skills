# V2EX · `get_topic`

Fetch a V2EX topic by numeric identifier.

- **Service**: `v2ex`
- **Action**: `get_topic`
- **Action id**: `v2ex.get_topic`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v2ex" --action "get_topic"
```

## Run

```bash
oo connector run "v2ex" --action "get_topic" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
