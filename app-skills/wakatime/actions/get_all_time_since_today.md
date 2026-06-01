# WakaTime · `get_all_time_since_today`

Get the total WakaTime coding time logged since the account was created.

- **Service**: `wakatime`
- **Action**: `get_all_time_since_today`
- **Action id**: `wakatime.get_all_time_since_today`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "wakatime" --action "get_all_time_since_today"
```

## Run

```bash
oo connector run "wakatime" --action "get_all_time_since_today" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
