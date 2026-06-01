# Google Ads · `get_campaign_by_id`

Retrieve one Google Ads campaign by its campaign ID.

- **Service**: `googleads`
- **Action**: `get_campaign_by_id`
- **Action id**: `googleads.get_campaign_by_id`
- **Required scopes**: googleads.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googleads" --action "get_campaign_by_id"
```

## Run

```bash
oo connector run "googleads" --action "get_campaign_by_id" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
