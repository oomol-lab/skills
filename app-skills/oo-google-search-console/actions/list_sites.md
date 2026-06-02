# Google Search Console · `list_sites`

List Search Console properties visible to the connected Google account.

- **Service**: `google_search_console`
- **Action**: `list_sites`
- **Action id**: `google_search_console.list_sites`
- **Required scopes**: google_search_console.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_search_console" --action "list_sites"
```

## Run

```bash
oo connector run "google_search_console" --action "list_sites" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
