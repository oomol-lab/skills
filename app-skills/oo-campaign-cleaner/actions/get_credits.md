# Campaign Cleaner · `get_credits`

Get the remaining Campaign Cleaner credits available to the current API key.

- **Service**: `campaign_cleaner`
- **Action**: `get_credits`
- **Action id**: `campaign_cleaner.get_credits`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "campaign_cleaner" --action "get_credits"
```

## Run

```bash
oo connector run "campaign_cleaner" --action "get_credits" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
