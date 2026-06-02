# Google Ads · `mutate_campaigns`

Create, update, or remove Google Ads campaigns in a single mutate request.

- **Service**: `googleads`
- **Action**: `mutate_campaigns`
- **Action id**: `googleads.mutate_campaigns`
- **Required scopes**: googleads.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googleads" --action "mutate_campaigns"
```

## Run

```bash
oo connector run "googleads" --action "mutate_campaigns" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
