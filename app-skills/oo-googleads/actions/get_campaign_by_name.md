# Google Ads · `get_campaign_by_name`

Retrieve all Google Ads campaigns that exactly match a campaign name.

- **Service**: `googleads`
- **Action**: `get_campaign_by_name`
- **Action id**: `googleads.get_campaign_by_name`
- **Required scopes**: googleads.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googleads" --action "get_campaign_by_name"
```

## Run

```bash
oo connector run "googleads" --action "get_campaign_by_name" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
