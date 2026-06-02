# TaxJar · `list_nexus_regions`

List TaxJar nexus regions for the account.

- **Service**: `taxjar`
- **Action**: `list_nexus_regions`
- **Action id**: `taxjar.list_nexus_regions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "taxjar" --action "list_nexus_regions"
```

## Run

```bash
oo connector run "taxjar" --action "list_nexus_regions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
