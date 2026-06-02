# Notion · `retrieve_data_source`

Retrieve a Notion data source by data source ID.

- **Service**: `notion`
- **Action**: `retrieve_data_source`
- **Action id**: `notion.retrieve_data_source`
- **Required scopes**: notion.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "notion" --action "retrieve_data_source"
```

## Run

```bash
oo connector run "notion" --action "retrieve_data_source" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
