# Campaign Cleaner · `get_campaign`

Retrieve the full Campaign Cleaner analysis payload for one saved campaign.

- **Service**: `campaign_cleaner`
- **Action**: `get_campaign`
- **Action id**: `campaign_cleaner.get_campaign`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "campaign_cleaner" --action "get_campaign"
```

## Run

```bash
oo connector run "campaign_cleaner" --action "get_campaign" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
