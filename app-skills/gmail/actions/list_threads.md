# Gmail · `list_threads`

List Gmail threads with optional query filtering and pagination. Spam and trash stay excluded unless you explicitly target them in the query.

- **Service**: `gmail`
- **Action**: `list_threads`
- **Action id**: `gmail.list_threads`
- **Required scopes**: gmail.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "list_threads"
```

## Run

```bash
oo connector run "gmail" --action "list_threads" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
