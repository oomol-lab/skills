# Webshare · `list_stats`

List Webshare hourly proxy usage stats for an optional time window.

- **Service**: `webshare`
- **Action**: `list_stats`
- **Action id**: `webshare.list_stats`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "webshare" --action "list_stats"
```

## Run

```bash
oo connector run "webshare" --action "list_stats" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
