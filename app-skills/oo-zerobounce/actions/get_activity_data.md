# ZeroBounce · `get_activity_data`

Get ZeroBounce email activity data for one email address.

- **Service**: `zerobounce`
- **Action**: `get_activity_data`
- **Action id**: `zerobounce.get_activity_data`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zerobounce" --action "get_activity_data"
```

## Run

```bash
oo connector run "zerobounce" --action "get_activity_data" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
