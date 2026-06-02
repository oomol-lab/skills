# Campaign Cleaner · `delete_campaign`

Delete one saved Campaign Cleaner campaign by campaign ID.

- **Service**: `campaign_cleaner`
- **Action**: `delete_campaign`
- **Action id**: `campaign_cleaner.delete_campaign`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "campaign_cleaner" --action "delete_campaign"
```

## Run

```bash
oo connector run "campaign_cleaner" --action "delete_campaign" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Campaign Cleaner data. Always confirm the target and get explicit user approval before running.
