# You.com · `fetch_contents`

Fetch HTML, Markdown, or metadata for one or more webpages with You.com.

- **Service**: `you`
- **Action**: `fetch_contents`
- **Action id**: `you.fetch_contents`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "you" --action "fetch_contents"
```

## Run

```bash
oo connector run "you" --action "fetch_contents" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
