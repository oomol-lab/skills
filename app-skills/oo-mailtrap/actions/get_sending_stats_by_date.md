# Mailtrap · `get_sending_stats_by_date`

Get Mailtrap sending stats grouped by date.

- **Service**: `mailtrap`
- **Action**: `get_sending_stats_by_date`
- **Action id**: `mailtrap.get_sending_stats_by_date`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "get_sending_stats_by_date"
```

## Run

```bash
oo connector run "mailtrap" --action "get_sending_stats_by_date" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
