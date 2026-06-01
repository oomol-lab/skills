# WakaTime · `get_stats`

Get WakaTime coding stats for the authenticated user.

- **Service**: `wakatime`
- **Action**: `get_stats`
- **Action id**: `wakatime.get_stats`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "wakatime" --action "get_stats"
```

## Run

```bash
oo connector run "wakatime" --action "get_stats" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
