# Google Search Console · `delete_site`

Remove a property from the connected account's Search Console site set.

- **Service**: `google_search_console`
- **Action**: `delete_site`
- **Action id**: `google_search_console.delete_site`
- **Required scopes**: google_search_console.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_search_console" --action "delete_site"
```

## Run

```bash
oo connector run "google_search_console" --action "delete_site" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Search Console data. Always confirm the target and get explicit user approval before running.
