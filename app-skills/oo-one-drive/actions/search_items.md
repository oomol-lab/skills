# OneDrive · `search_items`

Search OneDrive for files and folders by keyword.

- **Service**: `one_drive`
- **Action**: `search_items`
- **Action id**: `one_drive.search_items`
- **Required scopes**: one_drive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "one_drive" --action "search_items"
```

## Run

```bash
oo connector run "one_drive" --action "search_items" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
