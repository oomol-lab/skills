# Google Slides · `presentations_batch_update`

Apply raw Google Slides batchUpdate requests to a presentation.

- **Service**: `googleslides`
- **Action**: `presentations_batch_update`
- **Action id**: `googleslides.presentations_batch_update`
- **Required scopes**: googleslides.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googleslides" --action "presentations_batch_update"
```

## Run

```bash
oo connector run "googleslides" --action "presentations_batch_update" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Slides state. Confirm the exact payload and intended effect with the user before running.
