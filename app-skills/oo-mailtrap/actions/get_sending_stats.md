# Mailtrap · `get_sending_stats`

Get Mailtrap sending stats for one account.

- **Service**: `mailtrap`
- **Action**: `get_sending_stats`
- **Action id**: `mailtrap.get_sending_stats`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "get_sending_stats"
```

## Run

```bash
oo connector run "mailtrap" --action "get_sending_stats" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
