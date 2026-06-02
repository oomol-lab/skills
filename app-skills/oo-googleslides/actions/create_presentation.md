# Google Slides · `create_presentation`

Create a blank Google Slides presentation. Optional locale, page size, and presentation ID values are forwarded when provided.

- **Service**: `googleslides`
- **Action**: `create_presentation`
- **Action id**: `googleslides.create_presentation`
- **Required scopes**: googleslides.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googleslides" --action "create_presentation"
```

## Run

```bash
oo connector run "googleslides" --action "create_presentation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Slides state. Confirm the exact payload and intended effect with the user before running.
