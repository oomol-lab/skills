# Google Docs · `create_footer`

Create a footer in a Google Docs document, optionally targeting a specific section break location.

- **Service**: `googledocs`
- **Action**: `create_footer`
- **Action id**: `googledocs.create_footer`
- **Required scopes**: googledocs.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledocs" --action "create_footer"
```

## Run

```bash
oo connector run "googledocs" --action "create_footer" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Docs state. Confirm the exact payload and intended effect with the user before running.
