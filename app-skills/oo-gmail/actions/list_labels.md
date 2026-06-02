# Gmail · `list_labels`

List all system and user-created Gmail labels. Use this to discover the internal label IDs required by label mutation actions.

- **Service**: `gmail`
- **Action**: `list_labels`
- **Action id**: `gmail.list_labels`
- **Required scopes**: gmail.labels

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "list_labels"
```

## Run

```bash
oo connector run "gmail" --action "list_labels" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
