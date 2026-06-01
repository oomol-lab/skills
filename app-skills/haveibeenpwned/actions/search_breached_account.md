# Have I Been Pwned · `search_breached_account`

Search full HIBP breach models for an email address, with optional domain and unverified-breach filters.

- **Service**: `haveibeenpwned`
- **Action**: `search_breached_account`
- **Action id**: `haveibeenpwned.search_breached_account`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "haveibeenpwned" --action "search_breached_account"
```

## Run

```bash
oo connector run "haveibeenpwned" --action "search_breached_account" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
