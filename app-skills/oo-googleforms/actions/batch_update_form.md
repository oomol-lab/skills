# Google Forms · `batch_update_form`

Apply a batch of Google Forms update requests with optional revision controls and an optional updated form payload.

- **Service**: `googleforms`
- **Action**: `batch_update_form`
- **Action id**: `googleforms.batch_update_form`
- **Required scopes**: googleforms.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googleforms" --action "batch_update_form"
```

## Run

```bash
oo connector run "googleforms" --action "batch_update_form" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Forms state. Confirm the exact payload and intended effect with the user before running.
