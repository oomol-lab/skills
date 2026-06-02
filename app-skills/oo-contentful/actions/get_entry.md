# Contentful · `get_entry`

Get a single Contentful entry by identifier.

- **Service**: `contentful`
- **Action**: `get_entry`
- **Action id**: `contentful.get_entry`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "contentful" --action "get_entry"
```

## Run

```bash
oo connector run "contentful" --action "get_entry" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
