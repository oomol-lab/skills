# Gmail · `fetch_emails`

List Gmail messages with optional query, label, and pagination filters. Use `detail` to choose between identifiers only, lightweight summaries, or full normalized messages.

- **Service**: `gmail`
- **Action**: `fetch_emails`
- **Action id**: `gmail.fetch_emails`
- **Required scopes**: gmail.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "fetch_emails"
```

## Run

```bash
oo connector run "gmail" --action "fetch_emails" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
