# GTmetrix · `list_pages`

List GTmetrix pages associated with the connected account.

- **Service**: `gtmetrix`
- **Action**: `list_pages`
- **Action id**: `gtmetrix.list_pages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gtmetrix" --action "list_pages"
```

## Run

```bash
oo connector run "gtmetrix" --action "list_pages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
