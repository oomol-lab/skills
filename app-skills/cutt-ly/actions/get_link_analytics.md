# Cuttly · `get_link_analytics`

Retrieve click analytics for a Cuttly short URL.

- **Service**: `cutt_ly`
- **Action**: `get_link_analytics`
- **Action id**: `cutt_ly.get_link_analytics`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cutt_ly" --action "get_link_analytics"
```

## Run

```bash
oo connector run "cutt_ly" --action "get_link_analytics" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
