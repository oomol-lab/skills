# TiDB Cloud · `list_regions`

List TiDB Cloud regions available to the connected organization API key.

- **Service**: `tidb`
- **Action**: `list_regions`
- **Action id**: `tidb.list_regions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tidb" --action "list_regions"
```

## Run

```bash
oo connector run "tidb" --action "list_regions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
