# CallPage · `list_widgets`

List CallPage widgets with pagination.

- **Service**: `callpage`
- **Action**: `list_widgets`
- **Action id**: `callpage.list_widgets`
- **Required scopes**: widgets.view

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "callpage" --action "list_widgets"
```

## Run

```bash
oo connector run "callpage" --action "list_widgets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
