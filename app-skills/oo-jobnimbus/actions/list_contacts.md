# JobNimbus · `list_contacts`

List JobNimbus contacts with the standard pagination, sorting, field selection, actor, and Elasticsearch-style filter options.

- **Service**: `jobnimbus`
- **Action**: `list_contacts`
- **Action id**: `jobnimbus.list_contacts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "jobnimbus" --action "list_contacts"
```

## Run

```bash
oo connector run "jobnimbus" --action "list_contacts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
