# Claid AI · `submit_edit_image`

Submit one publicly accessible image to Claid's async image editing API and return the task handle for later polling.

- **Service**: `claid_ai`
- **Action**: `submit_edit_image`
- **Action id**: `claid_ai.submit_edit_image`
- **Required scopes**: image_editing

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "claid_ai" --action "submit_edit_image"
```

## Run

```bash
oo connector run "claid_ai" --action "submit_edit_image" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Claid AI state. Confirm the exact payload and intended effect with the user before running.
