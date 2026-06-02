# Notion · `retrieve_database`

Retrieve a Notion database's metadata and schema by database ID.

- **Service**: `notion`
- **Action**: `retrieve_database`
- **Action id**: `notion.retrieve_database`
- **Required scopes**: notion.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "notion" --action "retrieve_database"
```

## Run

```bash
oo connector run "notion" --action "retrieve_database" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
