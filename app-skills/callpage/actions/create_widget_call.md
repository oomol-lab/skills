# CallPage · `create_widget_call`

Create a CallPage callback request for one widget and phone number.

- **Service**: `callpage`
- **Action**: `create_widget_call`
- **Action id**: `callpage.create_widget_call`
- **Required scopes**: widgets.call

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "callpage" --action "create_widget_call"
```

## Run

```bash
oo connector run "callpage" --action "create_widget_call" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes CallPage state. Confirm the exact payload and intended effect with the user before running.
