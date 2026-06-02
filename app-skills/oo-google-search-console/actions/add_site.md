# Google Search Console · `add_site`

Add a property to the connected account's Search Console site set.

- **Service**: `google_search_console`
- **Action**: `add_site`
- **Action id**: `google_search_console.add_site`
- **Required scopes**: google_search_console.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_search_console" --action "add_site"
```

## Run

```bash
oo connector run "google_search_console" --action "add_site" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Search Console state. Confirm the exact payload and intended effect with the user before running.
