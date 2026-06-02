# Campaign Cleaner · `get_campaign_status`

Fetch the current processing status of one submitted Campaign Cleaner campaign.

- **Service**: `campaign_cleaner`
- **Action**: `get_campaign_status`
- **Action id**: `campaign_cleaner.get_campaign_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "campaign_cleaner" --action "get_campaign_status"
```

## Run

```bash
oo connector run "campaign_cleaner" --action "get_campaign_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
