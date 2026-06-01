# ima · `create_note`

Create a new IMA note from Markdown content.

- **Service**: `ima`
- **Action**: `create_note`
- **Action id**: `ima.create_note`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ima" --action "create_note"
```

## Run

```bash
oo connector run "ima" --action "create_note" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ima state. Confirm the exact payload and intended effect with the user before running.
