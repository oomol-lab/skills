# timelink · `get_current_token`

Inspect the current Timelink API token metadata.

- **Service**: `timelink`
- **Action**: `get_current_token`
- **Action id**: `timelink.get_current_token`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "timelink" --action "get_current_token"
```

## Run

```bash
oo connector run "timelink" --action "get_current_token" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
