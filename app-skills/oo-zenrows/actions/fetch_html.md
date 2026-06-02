# ZenRows · `fetch_html`

Fetch raw HTML from one public URL with optional JavaScript rendering and proxy controls.

- **Service**: `zenrows`
- **Action**: `fetch_html`
- **Action id**: `zenrows.fetch_html`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zenrows" --action "fetch_html"
```

## Run

```bash
oo connector run "zenrows" --action "fetch_html" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
