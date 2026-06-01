# Google Ads · `mutate_ad_groups`

Create, update, or remove Google Ads ad groups in a single mutate request.

- **Service**: `googleads`
- **Action**: `mutate_ad_groups`
- **Action id**: `googleads.mutate_ad_groups`
- **Required scopes**: googleads.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googleads" --action "mutate_ad_groups"
```

## Run

```bash
oo connector run "googleads" --action "mutate_ad_groups" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
