# Gmail · `search_threads`

Search Gmail threads by query and return lightweight thread summaries. Spam and trash stay excluded unless you explicitly target them in the query.

- **Service**: `gmail`
- **Action**: `search_threads`
- **Action id**: `gmail.search_threads`
- **Required scopes**: gmail.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "search_threads"
```

## Run

```bash
oo connector run "gmail" --action "search_threads" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
