# WakaTime · `get_summaries`

Get WakaTime daily summaries for the authenticated user.

- **Service**: `wakatime`
- **Action**: `get_summaries`
- **Action id**: `wakatime.get_summaries`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "wakatime" --action "get_summaries"
```

## Run

```bash
oo connector run "wakatime" --action "get_summaries" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
