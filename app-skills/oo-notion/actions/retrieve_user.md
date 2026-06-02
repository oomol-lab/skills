# Notion · `retrieve_user`

Retrieve a Notion user by user ID.

- **Service**: `notion`
- **Action**: `retrieve_user`
- **Action id**: `notion.retrieve_user`
- **Required scopes**: notion.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "notion" --action "retrieve_user"
```

## Run

```bash
oo connector run "notion" --action "retrieve_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
