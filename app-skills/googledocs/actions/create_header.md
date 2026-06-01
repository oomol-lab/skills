# Google Docs · `create_header`

Create a header in a Google Docs document and optionally insert initial text. You can also target a specific section break location.

- **Service**: `googledocs`
- **Action**: `create_header`
- **Action id**: `googledocs.create_header`
- **Required scopes**: googledocs.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledocs" --action "create_header"
```

## Run

```bash
oo connector run "googledocs" --action "create_header" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Docs state. Confirm the exact payload and intended effect with the user before running.
