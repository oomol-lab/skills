# Google Slides · `presentations_copy_from_template`

Copy an existing Google Slides presentation through Google Drive so the new presentation preserves the original themes, masters, and layouts.

- **Service**: `googleslides`
- **Action**: `presentations_copy_from_template`
- **Action id**: `googleslides.presentations_copy_from_template`
- **Required scopes**: googleslides.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googleslides" --action "presentations_copy_from_template"
```

## Run

```bash
oo connector run "googleslides" --action "presentations_copy_from_template" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Slides state. Confirm the exact payload and intended effect with the user before running.
