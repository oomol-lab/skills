# Campaign Cleaner · `list_campaigns`

List saved Campaign Cleaner campaigns together with their current processing status.

- **Service**: `campaign_cleaner`
- **Action**: `list_campaigns`
- **Action id**: `campaign_cleaner.list_campaigns`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "campaign_cleaner" --action "list_campaigns"
```

## Run

```bash
oo connector run "campaign_cleaner" --action "list_campaigns" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
