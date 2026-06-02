# CallPage · `list_calls`

List CallPage calls with optional filters such as widget, user, status, phone number, and time range.

- **Service**: `callpage`
- **Action**: `list_calls`
- **Action id**: `callpage.list_calls`
- **Required scopes**: calls.view

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "callpage" --action "list_calls"
```

## Run

```bash
oo connector run "callpage" --action "list_calls" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
