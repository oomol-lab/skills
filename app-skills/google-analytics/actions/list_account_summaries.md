# Google Analytics · `list_account_summaries`

List Google Analytics accounts and property summaries visible to the connected Google account.

- **Service**: `google_analytics`
- **Action**: `list_account_summaries`
- **Action id**: `google_analytics.list_account_summaries`
- **Required scopes**: google_analytics.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_analytics" --action "list_account_summaries"
```

## Run

```bash
oo connector run "google_analytics" --action "list_account_summaries" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
