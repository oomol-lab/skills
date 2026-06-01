# CallPage · `get_widget`

Get one CallPage widget by identifier.

- **Service**: `callpage`
- **Action**: `get_widget`
- **Action id**: `callpage.get_widget`
- **Required scopes**: widgets.view

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "callpage" --action "get_widget"
```

## Run

```bash
oo connector run "callpage" --action "get_widget" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
