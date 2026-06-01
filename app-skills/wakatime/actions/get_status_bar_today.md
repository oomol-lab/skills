# WakaTime · `get_status_bar_today`

Get today's cached WakaTime status bar summary for the authenticated user.

- **Service**: `wakatime`
- **Action**: `get_status_bar_today`
- **Action id**: `wakatime.get_status_bar_today`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "wakatime" --action "get_status_bar_today"
```

## Run

```bash
oo connector run "wakatime" --action "get_status_bar_today" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
